const url = "../../Cat-by/backend/api/empresas.php";
const url1 = "../../Cat-by/backend/api/loginEmpresa.php";
const tests = "../../Cat-by/backend/api/promocionesFavorita.php";
const test1 = "../../Cat-by/backend/api/carrito.php";
const urlComentarios = "../../Cat-by/backend/api/evaluacion.php";
const urlUsuario = "../../Cat-by/backend/api/usuarios.php";
var producto=[];
var empresas = [];
var usuario = [];
var empresas=[];
generarProductos('todos');
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
            //itemsComentarios(i, k, res.data[i].promociones[k].evaluacion);
          }
          if (res.data[i].promociones[k].categoria === produc) {
            agregarProducto(res.data[i].promociones[k], k, i);
            //itemsComentarios(i, k, res.data[i].promociones[k].evaluacion);
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function agregarProducto(produc, k, i) {
  console.log(produc.evaluacion);
  document.getElementById("productos").innerHTML += `
        <div class=" col-md-3 ">
        <div class="card" style="margin-bottom: 20px;" >
            <img src='${produc.image}' class="card-img-top" alt="...">
            <div class="card-body">
              <div class="card-title">
              <center>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              </center> 
              <br/>
              <h6><b>${produc.nombreProducto} | -${produc.descuento} </b></h6>
              <h6><b>Precio:${produc.precioAhora}</b></h6>
              <h6 class="texto2" style="text-decoration: line-through;" ><b>Precio real:${produc.precioAntes} </b></h6>
              <h6><b>${empresas[i].nombreEmpresa}</b></h6>
            </div>
              <p class="card-text">${produc.descripcion}</p>
            
            <hr>
            <div class="iconos" style="display: flex; align-items: center;justify-content: center;">
            <i onClick="FavoriteProduc(${k},${i})" data-toggle="modal" data-target="#empresaF"" class="fas fa-heart fa-2x " style="margin-right: 5px!important ; color: red;" ></i>
            <i onClick="agregarCarrito(${k},${i})" data-toggle="modal" data-target="#carritosA"  class="fas fa-cart-plus fa-2x" style="margin-right: 5px!important;color:green;" ></i>
            <i onClick="itemsComentarios(${i},${k})" data-toggle="modal" data-target="#exampleModal" class="fas fa-comment-dots fa-2x" style="margin-right: 5px!important;color:blue;" ></i>
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
  console.log("Este es el producto a guardar:", product);
  let carrito = {
    image: product.image,
    nombreProducto: product.nombreProducto,
    categoria: product.categoria,
    descripcion: product.descripcion,
    precioAntes: product.precioAntes,
    precioAhora: product.precioAhora,
    descuento: product.descuento,
    fechaInicio: product.fechaInicio,
    fechaLimite: product.fechaLimite,
    ubicacionsucursal: product.ubicacionsucursal,
  };
  console.log("Este es el producto a guardar:", product);

  axios({
    method: "POST",
    url: test1 + `?id=${obtenerIdUsuario()}`,
    responseType: "json",
    data: carrito,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

function FavoriteProduc(indiceProducto, indiceEmpresa) {
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
  console.log("Este es el producto favorito:", productos);
  let productoFavorito = {
    image: productos.image,
    nombreProducto: productos.nombreProducto,
    descripcion: productos.descripcion,
    precioAhora: productos.precioAhora,
    ubicacionsucursal: productos.ubicacionsucursal,
  };
  console.log("Promocion Favorita a guardar", productoFavorito);

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
/*
function itemsComentarios(idProducto, idEmpresa) {
  document.getElementById("comentario").innerHTML = "";
  document.getElementById("imprimirBoton").innerHTML = `
  <button
                    type="button"
                    onClick="guardarComentario(${idProducto},${idEmpresa})"
                    class="btn btn-outline-danger"
                  >
                    <i class="far fa-paper-plane"></i>
                  </button>`;

  console.log("este es el id de la empresa", idEmpresa);
  axios({
    method: "GET",
    url: url + `?id=${idEmpresa}`,
    responseType: "json",
  })
    .then((res) => {
      this.empresas = res.data;
      let data = res.data.promociones[idProducto].evaluacion;
      for (let i = 0; i < data.length; i++) {
        usuarioComentarios(data[i]);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function usuarioComentarios(comentario) {
  console.log("id del usuario", comentario);
  axios({
    method: "GET",
    url: urlUsuario + `?id=${comentario.idUsuario}`,
    responseType: "json",
  })
    .then((res) => {
      usuario = res.data;
      document.getElementById(
        "comentario"
      ).innerHTML += `<i class="fas fa-user-circle fa-2x"></i>
      <span>${res.data.nombre} ${res.data.apellido}</span>
      <p>
        ${comentario.comentario}
      </p>
      <p>12/12/2019</p>
      <hr />`;
      console.log("esta es la data del usuario", res.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function guardarComentario(idProducto, idEmpresa) {
  console.log("este usuario: ", obtenerIdUsuario(), idProducto);
  let comentario = {
    comentario: document.getElementById("idComentario").value,
    calificacion: 5,
    idUsuario: obtenerIdUsuario(),
  };
  console.log("data a guardar", comentario);

  axios({
    method: "POST",
    url: urlComentarios + `?id=${idProducto}&index=${idEmpresa}`,
    responseType: "json",
    data: comentario,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}
* */
//obtener comentarios
function itemsComentarios(idempresa, idpromo){

  document.getElementById("imprimirBot").innerHTML = `
  <button
                    type="button"
                    onClick="guardaritemsComentarios(${idempresa},${idpromo})"
                    class="btn btn-outline-danger"
                  >
                    <i class="far fa-paper-plane"></i>
                  </button>`;

 
  axios({
    method: "GET",
    url: urlComentarios + `?id=${idempresa}&index=${idpromo}`,
    responseType: "json",
  })
    .then((res) => {
    this.producto=res.data;
  
    document.getElementById( "comentarios").innerHTML="";
      for (let i = 0; i < producto.evaluacion.length; i++) {
        console.log("este es el comentario", producto.evaluacion[i].comentario);
        document.getElementById( "comentarios").innerHTML += 
        `<i class="fas fa-user-circle fa-2x"></i>
        <span>${producto.evaluacion[i].nombre} ${producto.evaluacion[i].apellido} </span>
        <p>
          ${producto.evaluacion[i].comentario}
        </p>
       
        <hr />`;
        
        
      
    }
  
  $("#exampleModal").modal('show');
   
    })
    .catch((error) => {
      console.error(error);
    });


}

function obtenerUsuarioId(){
  
  console.log("id a buscar: ",obtenerIdUsuario());
  axios({
    method: "GET",
    url: urlUsuario+`?id=${obtenerIdUsuario()}`,
    responseType: "json"
  })
    .then((res) => {
      console.log(res.data);
      this.usuario = res.data;
    
     
      //al  momento que responda el servidor le vamos asignar el arreglo
     // generarEmpresa();
      
    })
    .catch((error) => {
      console.error(error);
    });
}
obtenerUsuarioId();

//guardar comentarios
function guardaritemsComentarios(idempresa, idpromo){
 
  let comentarios = {
    comentario: document.getElementById("idcomentario").value,
    calificacion:6,
    nombre: usuario.nombre,
    apellido:usuario.apellido
  };

axios({
  method: "POST",
  url: urlComentarios + `?id=${idempresa}&index=${idpromo}`,
  responseType: "json",
  data: comentarios,
})
  .then((res) => {
    itemsComentarios(idempresa, idpromo);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
}


