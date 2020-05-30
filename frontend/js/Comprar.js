const test='../../Cat-by/backend/api/carrito.php';
var usuarios = [];


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
      url: test+`?id=${obtenerIdUsuario()}`,
      responseType: "json"
    })
      .then((res) => {
        console.log(res.data);
        this.usuarios = res.data;
        llenarCarritoCompra(res.data)
       
        //al  momento que responda el servidor le vamos asignar el arreglo
       // generarEmpresa();
        
      })
      .catch((error) => {
        console.error(error);
      });
  
    }

 function llenarCarritoCompra(data){
 console.log(data);
 document.getElementById("compra-producto").innerHTML="";
 for (let i = 0; i < data.carrito.length; i++) {
     document.getElementById("compra-producto").innerHTML+=`
     <div class="d-flex">
     <h6>${data.carrito[i].nombreProducto}</h6>
     <div class="ml-auto text3"> ${data.carrito[i].precioAhora} </div>
</div>

     
     `
    
     
 }




 } 