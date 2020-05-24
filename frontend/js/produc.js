const url = "../../Cat-by/backend/api/empresas.php";
const url1 = "../../Cat-by/backend/api/loginEmpresa.php";
const tests = "../../Cat-by/backend/api/empresasFavoritas.php";
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
            <i class="fas fa-heart" style="margin-right: 5px!important ; color: red;" ></i>
            <i onClick="agregarCarrito(${k},${i})" class="fas fa-cart-plus" style="margin-right: 5px!important;color:green;" ></i>
            <i class="fas fa-star" style="margin-right: 5px!important; color:yellow;" ></i>
            <i class="fas fa-comment-dots" style="margin-right: 5px!important;color:blue;" ></i>
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
aqui se debe llmar al API de agregar este producto al JSON de usuarios.carrito[]*/
function productoSelecionado(product) {
  console.log(product);
}
