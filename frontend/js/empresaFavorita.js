const url='../../Cat-by/backend/api/usuarios.php';

var usuarios = [];
obtenerUsuarioId();
function obtenerIdUsuario(){
    let kokie 
    let idEmpresa
    let aCookies = document.cookie.split(";");
    for (let i = 0; i < aCookies.length; i++) {
      kokie=aCookies[i].split("=")
      if(kokie[0]===" id"){
        console.log(kokie[1])
         idEmpresa=kokie[1]
      }
    }
    return idEmpresa
  }
  function obtenerUsuarioId(){
    
    console.log("id a buscar: ",obtenerIdUsuario());
    axios({
      method: "GET",
      url: url+`?id=${obtenerIdUsuario()}`,
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
 for (let i = 0; i < data.empresaFavoritas.length; i++) {
     document.querySelector('#tabla-empresaFavorita tbody').innerHTML+=`
     <tr>
     <td data-label="Imagen"> 
         <a href="#">   <img class="img-fluid" src="img/elektra.png" alt="" /></a>
     </td>
     <td data-label=" Empresa" >${ data.empresaFavoritas[i].nombreEmpresa}</td>
     <td data-label="Descripcion">${ data.empresaFavoritas[i].descripcion}</td>
     <td data-label="Ubicacion">${ data.empresaFavoritas[i].ubicacion}</td>
  </tr>
     
     
     `
    
     
 }




 } 