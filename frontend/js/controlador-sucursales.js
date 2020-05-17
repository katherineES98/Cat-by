
const url='../../Cat-by/backend/api/sucursales.php';



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
    url:url +`?id=${0}`,
    responseType:'json',
    data:sucursal
   }).then((res)=>{
       console.log(res);
   }).catch((error)=>{
       console.error(error);
   });
  
   
  
  }