const url2='../../Cat-by-master-V/backend/api/usuarios.php';


//guardar Usuario
function  guardarUsuario(){
 
    let usuario = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      genero: document.getElementById('genero').value,
      contrasena: document.getElementById('contrasena').value,
      correo: document.getElementById('correo').value,
      direccion: document.getElementById('direccion').value,
      telefono: document.getElementById('telefono').value,
      empresaFavoritas: [],
      carrito:[],
      promocionesFavoritas: []
  
     
    };
  console.log('Usuario a guardar', usuario)
  //servidor ahora
  axios({
    method:'POST',
    url:url2,
    responseType:'json',
    data:usuario
   }).then((res)=>{
       console.log(res);
   }).catch((error)=>{
       console.error(error);
   });
  
  
  
  }
  
  //actualiar un usuario
  function  actualizarUsuario(){
   
    let usuario = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      genero: document.getElementById('genero').value,
      contrasena: document.getElementById('contrasena').value,
      correo: document.getElementById('correo').value,
      direccion: document.getElementById('direccion').value,
      telefono: document.getElementById('telefono').value
      
     
    };
  console.log('Usuario a actualizar', usuario);
  //servidor ahora
  axios({
    method:'PUT',
    url:url2 +`?id=${0}`,
    responseType:'json',
    data:usuario
   }).then((res)=>{
       console.log(res);
   }).catch((error)=>{
       console.error(error);
   });
  
   login();
  
  }
  