const url='../../Cat-by/backend/api/usuarios.php';
const url1='../../Cat-by/backend/api/carrito.php';
var usuarios = [];

optenerMisProductosCarrito();
function obtenerIdUsuario(){
    let kokie 
    let idUsuario
    let aCookies = document.cookie.split(";");
    for (let i = 0; i < aCookies.length; i++) {
      kokie=aCookies[i].split("=")
      if(kokie[0]===" id"){
        console.log(kokie[1])
         idUsuario=kokie[1]
      }
    }
    return idUsuario
  }

    
    

function optenerMisProductosCarrito() {
console.log("id a buscar: ",obtenerIdUsuario());
    axios({
      method: "GET",
      url: url1+`?id=${obtenerIdUsuario()}`,
      responseType: "json"
    })
      .then((res) => {
        console.log(res.data);
        this.usuarios = res.data;
        llenarTablaCarrito(res.data)
        precio();
        //al  momento que responda el servidor le vamos asignar el arreglo
       // generarEmpresa();
        
      })
      .catch((error) => {
        console.error(error);
      });
  
    }

 function llenarTablaCarrito(data){
 console.log(data);
 document.querySelector('#carrito-compra tbody').innerHTML="";
 for (let i = 0; i < data.carrito.length; i++) {
     document.querySelector('#carrito-compra tbody').innerHTML+=`
   
     <tr>
     <td data-label="Imagen"> 
         <a href="#">   <img class="img-fluid" src="${data.carrito[i].image}" alt="" /></a>
     </td>
     <td data-label=" Producto" >${data.carrito[i].nombreProducto}</td>
     <td data-label=" Descripcion" >${data.carrito[i].descripcion}</td>
     <td data-label="Precio">${data.carrito[i].precioAhora}</td>
     <td data-label="Quitar">
         <a href="javascript:void(0);">
             <i  onClick="EliminarCarrito(${i})"class="fas fa-times"></i>
         </a>
     </td>
  </tr>






     
     `
    
     
 }




 } 

 

 function EliminarCarrito(car){
  console.log("eliminar producto del carrito" ,car);
  axios({
    method: "DELETE",
    url: url1+`?id=${obtenerIdUsuario()}&index=${car}`,
    responseType: "json"
  })
    .then((res) => {
      console.log(res.data);
      optenerMisProductosCarrito();
    
    })
    
    .catch((error) => {
      console.error(error);
    });
  
  
  }

function precio(){
  
  let total1=0;
 
for (let i = 0; i <usuarios.carrito.length; i++) {
     total1+=parseFloat(usuarios.carrito[i].precioAhora);

}

document.getElementById("compra").innerHTML=
`
  <h4>Compra Hecha con exito</h4>
  <p>Total a pagar:$${total1}</p>
  
  
  `;


}