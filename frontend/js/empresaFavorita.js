const url='../../Cat-by/backend/api/usuarios.php';
const url1='../../Cat-by/backend/api/empresasFavoritas.php';

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
 document.querySelector('#tabla-empresaFavorita tbody').innerHTML="";
 for (let i = 0; i < data.empresaFavoritas.length; i++) {
     document.querySelector('#tabla-empresaFavorita tbody').innerHTML+=`
     <tr>
     <td data-label="Imagen"> 
         <a href="#">   <img class="img-fluid" src="${data.empresaFavoritas[i].logo}" alt="" /></a>
     </td>
     <td data-label=" Empresa" >${ data.empresaFavoritas[i].nombreEmpresa}</td>
     <td data-label="Descripcion">${ data.empresaFavoritas[i].descripcionEmpresa}</td>
     <td data-label="Ubicacion">${ data.empresaFavoritas[i].direccion }</td>
     <td data-label="Quitar">
                        <a href="#">
                            <i  onClick="EliminarFavoriteCompany(${i})" class="fas fa-times"></i>
                        </a>
                    </td>
  </tr>
     
     
     `
    
     
 }




 } 

 function EliminarFavoriteCompany(empresa){
  console.log("eliminar promocion favorita" ,empresa);
  axios({
      method: "DELETE",
      url: url1+`?id=${obtenerIdUsuario()}&index=${empresa}`,
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