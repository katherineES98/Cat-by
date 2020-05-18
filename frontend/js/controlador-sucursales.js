
const url='../../Cat-by/backend/api/sucursales.php';
const url1 = "../../Cat-by/backend/api/empresas.php";
var empresas = [];



//guardar Sucursal
function  guardarSucursal(){
 
    let sucursal = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        direccion: document.getElementById('direccion').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
       
  
     
    };
  console.log('Sucursal a guardar', sucursal)
  //servidor ahora
  axios({
    method:'POST',
    url:url +`?id=${optenerId()}`,
    responseType:'json',
    data:sucursal
   }).then((res)=>{
       console.log(res);
   }).catch((error)=>{
       console.error(error);
   });
  
   
  
  }


  function optenerId(){
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



