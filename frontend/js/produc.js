const url = "../../Cat-by/backend/api/empresas.php";
const url1 = "../../Cat-by/backend/api/loginEmpresa.php";
const tests = "../../Cat-by/backend/api/promocionesFavorita.php";
const test1="../../Cat-by/backend/api/carrito.php";
var empresas = [];
generarProductos("todos");
function generarProductos(produc) {
  document.getElementById("productos").innerHTML = "";
  console.log(produc);
  axios({
    method: "GET",
    url: url,
    responseType: "json",
  })
    .then((res) => {
      console.log(res.data);
      this.empresas = res.data;
      for (let i = 0; i < res.data.length; i++) {
        for (let k = 0; k < res.data[i].promociones.length; k++) {
          if (produc === "todos") {
            agregarProducto(res.data[i].promociones[k], k, i);
          }
          if (res.data[i].promociones[k].categoria === produc) {
            agregarProducto(res.data[i].promociones[k], k, i);
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function agregarProducto(produc, k, i) {
  console.log(produc);

  document.getElementById("productos").innerHTML += `
        <div class=" col-md-3 ">
        <div class="card" style="margin-bottom: 20px;" >
            <img src='${produc.image}' class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">   
              <h6><b>${produc.nombreProducto} | -${produc.descuento} </b></h6>
              <h6><b>Precio:${produc.precioAhora}</b></h6>
              <h6 class="texto2" style="text-decoration: line-through;" ><b>Precio real:${produc.precioAntes} </b></h6>
              <h6><b>${empresas[i].nombreEmpresa}</b></h6>
            </div>
              <p class="card-text">${produc.descripcion}</p>
            
            <hr>
            <div class="iconos" style="display: flex; align-items: center;justify-content: center;">
            <i onClick="FavoriteProduc(${k},${i})" class="fas fa-heart" style="margin-right: 5px!important ; color: red;" ></i>
            <i onClick="agregarCarrito(${k},${i})" class="fas fa-cart-plus" style="margin-right: 5px!important;color:green;" ></i>
            <i class="fas fa-star" style="margin-right: 5px!important; color:yellow;" ></i>
            <i  data-toggle="modal" data-target="#exampleModal" class="fas fa-comment-dots" style="margin-right: 5px!important;color:blue;" ></i>
          </div>
        

            </div>
          </div>

     </div>
        
        `;
}
// funcion que seleciona el producto que se decisio agregar al carrito
function agregarCarrito(indiceProducto, indiceEmpresa) {
  console.log(indiceProducto);
  console.log(indiceEmpresa);
  axios({
    method: "GET",
    url: url,
    responseType: "json",
  })
    .then((res) => {
      console.log(res.data);
      this.empresas = res.data;
      for (let i = 0; i < res.data.length; i++) {
        for (let k = 0; k < res.data[i].promociones.length; k++) {
          if (indiceEmpresa === i && indiceProducto === k) {
            productoSelecionado(res.data[i].promociones[k]);
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

/*product son los datos de mi producto selecionado para agregar al carrito
aqui se debe llmar al API de agregar este producto al JSON de usuarios.carrito[] osea el metodo post*/
function productoSelecionado(product) {
  console.log("Este es el producto a guardar:",product);
  let carrito={
          image:product.image,
          nombreProducto:product.nombreProducto,
          categoria:product.categoria,
          descripcion:product.descripcion,
          precioAntes:product.precioAntes ,
          precioAhora:product.precioAhora ,
          descuento:product.descuento,
          fechaInicio:product.fechaInicio,
          fechaLimite:product.fechaLimite,
          ubicacionsucursal:product.ubicacionsucursal,
  }
  console.log("Este es el producto a guardar:",product);

  axios({
    method: "POST",
    url: test1 + `?id=${obtenerIdUsuario()}`,
    responseType: "json",
    data:carrito,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

}


function FavoriteProduc(indiceProducto, indiceEmpresa){
  console.log(indiceProducto);
  console.log(indiceEmpresa);
  axios({
    method: "GET",
    url: url,
    responseType: "json",
  })
    .then((res) => {
      console.log(res.data);
      this.empresas = res.data;
      for (let i = 0; i < res.data.length; i++) {
        for (let k = 0; k < res.data[i].promociones.length; k++) {
          if (indiceEmpresa === i && indiceProducto === k) {
            productoSelecionadoFavorito(res.data[i].promociones[k]);
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });

}
//indice del usuario
function obtenerIdUsuario() {
  let kokie;
  let idUsuario;
  let aCookies = document.cookie.split(";");
  for (let i = 0; i < aCookies.length; i++) {
    kokie = aCookies[i].split("=");
    if (kokie[0] === " id") {
      console.log(kokie[1]);
      idUsuario = kokie[1];
    }
  }
  return idUsuario;
}



function productoSelecionadoFavorito(productos) {
  console.log("Este es el producto favorito:",productos);
  let productoFavorito={
    image:productos.image,
    nombreProducto:productos.nombreProducto,
    descripcion:productos.descripcion,
    precioAhora:productos.precioAhora,
    ubicacionsucursal:productos.ubicacionsucursal 
  }
  console.log("Promocion Favorita a guardar",  productoFavorito);

  axios({
    method: "POST",
    url: tests + `?id=${obtenerIdUsuario()}`,
    responseType: "json",
    data: productoFavorito,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

}
