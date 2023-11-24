const arrayProductos = localStorage.getItem('productosCarrito');
const contenedor = document.querySelector('.container-productos');
const totalCompra = document.querySelector('#totalCompra');
const subtotalTotal = document.querySelector('#subtotal');
const costoEnvio = document.querySelector('#envio');
const tipoDeEnvio = document.querySelector('#tipoEnvio');

JSON.parse(arrayProductos).forEach(element => {
    contenedor.innerHTML +=`
    <tr id="container-${element.id}">
        <th scope="row"><img class="img-fluid" src="${element.imagen}" alt="" style="width: 3rem;"></th>
        <td>${element.nombre}</td>
        <td>$${element.unitCost}</td>
        <td class="w-25"><input id="${element.id}" class="p-1" type="number" min="1" value="${element.count}" style="width: 3rem;" onchange="actualizarSubtotal(${element.id})"></td>
        <td id="subtotal_${element.id}" class="subtotal">$${element.unitCost * element.count}</td>
        <td><i class="${element.id} bi bi-trash" onclick="borrar(this)"></i></td>
    </tr>
    `
    subtotalTotal.innerHTML = `$${totalSubtotal()}`
    totalTotal();
    
});

function actualizarSubtotal(id) {
    const input = document.getElementById(id);
    const subtotal = document.getElementById(`subtotal_${id}`);
    const producto = JSON.parse(arrayProductos).find(p => p.id === id);
    const nuevoSubtotal = producto.unitCost * input.value;
    subtotal.textContent = '$' + nuevoSubtotal;
    subtotalTotal.innerHTML = `$ ${totalSubtotal()}`
    prcEnvio();
    totalTotal();
}

function borrar(clase){
    const clases = clase.className.split(' ');
    const primeraClase = clases[0];
    const td = document.getElementById(`container-${primeraClase}`)
    td.remove()
    let productos = JSON.parse(localStorage.getItem('productosCarrito'));
    const posicion = productos.findIndex(producto => producto.id === parseInt(primeraClase));
    productos.splice(posicion, 1)
    localStorage.setItem('productosCarrito', JSON.stringify(productos));
    subtotalTotal.innerHTML = `$ ${totalSubtotal()}`
    prcEnvio();
    totalTotal();
}

function totalSubtotal() {
    const subtotales = contenedor.querySelectorAll(".subtotal");
    let total = 0;
    let precio = 0;

    subtotales.forEach(subtotal => {
       let texto = subtotal.textContent;
       let num = parseInt(texto.slice(1));
       precio = num;
       

       total += precio;
    })
    total = Math.trunc(total);

    return total
}

function prcEnvio(){
    const debito = document.getElementById("option1")
    const efectivo = document.getElementById("option2")
    const credito = document.getElementById("option3")

    let total = parseInt(subtotalTotal.textContent.slice(1))

    if (debito.checked){
       costoEnvio.innerHTML = `$0`         
    } else if (efectivo.checked){
        costoEnvio.innerHTML = `$ ${Math.trunc(total / 10 )}`
    } else if (credito.checked) {
        costoEnvio.innerHTML = `$ ${Math.trunc(total * 0.05)}`
    }
}
 
function totalTotal() {
    const num1 = parseInt(subtotalTotal.textContent.slice(1));
    const num2 = parseInt(costoEnvio.textContent.slice(1));

    let sumaTotal = num1 + num2;

    totalCompra.innerHTML = `$${sumaTotal}`;
}

console.log(tipoDeEnvio.querySelectorAll("input"))
const tiposEnvio = tipoDeEnvio.querySelectorAll("input");
tiposEnvio.forEach(envio => {
    envio.addEventListener("click", () => {
        prcEnvio();
        totalTotal();
        console.log('mano aca tambien')
    })
})