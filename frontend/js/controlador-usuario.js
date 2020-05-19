const url2='../../Cat-by/backend/api/usuarios.php';
var usuarios = [];
console.log("imprimeindo windon location",window.location.search.substring(1))

if(window.location.search.substring(1)){
  obtenerUsuarioId()
  
}

function login(){
  axios({
    method:'POST',
    url:"../../Cat-by/backend/api/login.php",
    responseType:'json',
    data:{
      correo:document.getElementById('correo').value,
     contrasena:document.getElementById('contrasena').value

    }
   }).then(res=>{
    if (res.data.codigoResultados==1) {
      window.location.href="cuentausuario.php";
      
  } else {
      document.getElementById('errorUsuario').style.display='block';
      document.getElementById('errorUsuario').innerHTML=res.data.mensaje;
      
  }
        
       console.log(res);
       
   }).catch(error=>{
       console.error(error);
   });
  


}

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
    url: url2+`?id=${obtenerIdUsuario()}`,
    responseType: "json"
  })
    .then((res) => {
      console.log(res.data);
      this.usuarios = res.data;
     
      //al  momento que responda el servidor le vamos asignar el arreglo
     // generarEmpresa();
      
    })
    .catch((error) => {
      console.error(error);
    });
}












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
  
  
  
  }
  