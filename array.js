const productos =  [
      {
        "id": 1,
        "nombre": "Adhesivo montaje",
        "precio": 161,
        "stock": 15,
        "imagen": "img/adhesivo-montaje.jpg"
      },
      {
        "id": 2,
        "nombre": "Aprietacabo",
        "precio": 10,
        "stock": 120,
        "imagen": "img/aprietacabo.jpg"
      },
      {
        "id": 3,
        "nombre": "Arandela comun",
        "precio": 211,
        "stock": 100,
        "imagen": "img/arandela-comun.jpg"
      },
      {
        "id": 4,
        "nombre": "Cinta aisladora",
        "precio": 51,
        "stock": 15,
        "imagen": "img/cinta-aisladora.jpg"
      },
      {
        "id": 5,
        "nombre": "Cinta aisladora roja",
        "precio": 51,
        "stock": 12,
        "imagen": "img/cinta-aisladora-rija.jpg"
      },
      {
        "id": 6,
        "nombre": "Cinta aisladora tierra",
        "precio": 51,
        "stock": 10,
        "imagen": "img/cinta-aisladora-tierra.jpg"
      },
            {
        "id": 7,
        "nombre": "Cinta empaque",
        "precio": 66,
        "stock": 12,
        "imagen": "img/cinta-empaque.jpg"
      },
      {
        "id": 8,
        "nombre": "Enduido",
        "precio": 54,
        "stock": 15,
        "imagen": "img/enduido.jpg"
      },
      {
        "id": 9,
        "nombre": "Espuma poliuterano",
        "precio": 399,
        "stock": 21,
        "imagen": "img/espuma-poliuterano.jpg"
      },
      {
        "id": 10,
        "nombre": "Gotita",
        "precio": 113,
        "stock": 100,
        "imagen": "img/gotita.jpg"
      },
      {
        "id": 11,
        "nombre": "Grampa liviana",
        "precio": 6,
        "stock": 150,
        "imagen": "img/grampa-liviana.jpg"
      },
      {
        "id": 12,
        "nombre": "Grampa omega",
        "precio": 8,
        "stock": 120,
        "imagen": "img/grampa-omega.jpg"
      },
      {
        "id": 13,
        "nombre": "Linga acero",
        "precio": 46,
        "stock": 41,
        "imagen": "img/linga-acero.jpg"
      },
      {
        "id": 14,
        "nombre": "Manguera supergas",
        "precio": 74,
        "stock": 54,
        "imagen": "img/manguera-supergas.jpg"
      },
      {
        "id": 15,
        "nombre": "Martillo",
        "precio": 15.99,
        "stock": 100,
        "imagen": "img/martillo.jpg"
      },
      {
        "id": 16,
        "nombre": "Pegamento poxilina",
        "precio": 215,
        "stock": 22,
        "imagen": "img/pegamento-poxilina.jpg"
      },
      {
        "id": 17,
        "nombre": "Pintura aerosol",
        "precio": 164,
        "stock": 104,
        "imagen": "img/pintura-aerosol.jpg"
      },
      {
        "id": 18,
        "nombre": "Sellarosca",
        "precio": 126,
        "stock": 58,
        "imagen": "img/sellarosca.jpg"
      },
      {
        "id": 19,
        "nombre": "Taco fischer",
        "precio": 10,
        "stock": 120,
        "imagen": "img/tacofiller.jpg"
      },
      {
        "id": 20,
        "nombre": "Taco metalico",
        "precio": 40,
        "stock": 114,
        "imagen": "img/taco-metalico.jpg"
      },
      {
        "id": 21,
        "nombre": "Tornillo 100unid",
        "precio": 284,
        "stock": 150,
        "imagen": "img/tornillo.jpg"
      },
      {
        "id": 22,
        "nombre": "Tuerca 100unid",
        "precio": 241,
        "stock": 67,
        "imagen": "img/tuerca.jpg"
      },      
      {
        "id": 23,
        "nombre": "Union 1/2",
        "precio": 11,
        "stock": 134,
        "imagen": "img/union1-2.jpg"
      },
      {
        "id": 24,
        "nombre": "Varilla roscada",
        "precio": 116,
        "stock": 159,
        "imagen": "img/varilla-roscada.jpg"
      },
    ]

const prueba = document.querySelector("#prueba");
const arregloProductos = JSON.parse(localStorage.getItem('productosCarrito')) || [];

productos.forEach(element => {
  
  prueba.innerHTML +=`
  <div id="card" class="shadow-lg card m-2" style="width: 16rem;">
    <img src="${element.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Precio: $${element.precio}</li>
      <li class="list-group-item">Stock:${element.stock}</li>
    </ul>
    <div class="card-body">
      <button id="comprar" type="submit" class="btn btn-dark"  onclick="agregarCarrito(${element.id})">Añadir al carrito</button>
    </div>
  </div>
  `
});

function agregarObjeto(objeto) {
  const objetoExistente = arregloProductos.find(obj => obj.id === objeto.id);

  if (objetoExistente) {
    // Si ya existe, aumenta el contador en el objeto existente
    objetoExistente.count++;
  } else {
    // Si no existe, agrega el objeto al arreglo
    objeto.count = 1;
    arregloProductos.push(objeto);
  }
}              

function agregarCarrito(id){
  const articles = 
          {
              "id": productos[id - 1].id,
              "nombre": productos[id - 1].nombre,
              "count": 1,
              "unitCost": productos[id - 1].precio,
              "imagen": productos[id - 1].imagen
          };
  console.log(articles)
  agregarObjeto(articles)

  localStorage.setItem('productosCarrito', JSON.stringify(arregloProductos))

      }