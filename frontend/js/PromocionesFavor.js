const url='../../Cat-by/backend/api/usuarios.php';
const url1='../../Cat-by/backend/api/promocionesFavorita.php';

var usuarios = [];
obtenerUsuarioId();
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
  function obtenerUsuarioId(){
    
    console.log("id a buscar: ",obtenerIdUsuario());
    axios({
      method: "GET",
      url: url1+`?id=${obtenerIdUsuario()}`,
      responseType: "json"
    })
      .then((res) => {
        console.log(res.data);
        this.usuarios = res.data;
        llenarTabla(res.data)
       
        //al  momento que responda el servidor le vamos asignar el arreglo
       // generarEmpresa();
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

 function llenarTabla(data){
 console.log(data);
 document.querySelector('#tabla-promocionesFavorita tbody').innerHTML="";
 for (let i = 0; i < data.promocionesFavoritas.length; i++) {
     document.querySelector('#tabla-promocionesFavorita tbody').innerHTML+=`
     <tr>
    <td data-label="Imagen"> 
     <a href="#"><img class="img-fluid" src="${data.promocionesFavoritas[i].image}" alt="" /></a>
    </td>
    <td data-label="Nombre Producto" >${data.promocionesFavoritas[i].nombreProducto}</td>
    <td data-label="Descripcion" >${data.promocionesFavoritas[i].descripcion}</td>
    <td data-label="Precio">${data.promocionesFavoritas[i].precioAhora}</td>
    <td data-label="Sucursal">${data.promocionesFavoritas[i].ubicacionsucursal}</td>
    <td data-label="Quitar">
                        <a href="#">
                            <i  onClick="EliminarFavoriteProduct(${i})" class="fas fa-times"></i>
                        </a>
                    </td>
    </tr>
     
     
     `
    
     
 }




 } 

function EliminarFavoriteProduct(product){
console.log("eliminar promocion favorita" ,product);
axios({
    method: "DELETE",
    url: url1+`?id=${obtenerIdUsuario()}&index=${product}`,
    responseType: "json"
  })
    .then((res) => {
      console.log(res.data);
      obtenerUsuarioId();
    
    })
    
    .catch((error) => {
      console.error(error);
    });
    


}
