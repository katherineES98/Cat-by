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
        if (res.data.codigoResultados==2) {
          window.location.href="superadministrador.html";
          
        } else if (res.data.codigoResultados==1) {
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
    url: url2+`?id=${obtenerIdUsuario()}`,
    responseType: "json"
  })
    .then((res) => {
      console.log(res.data);
      this.usuarios = res.data;
      updateFormValueUsuario(res.data)
     
      //al  momento que responda el servidor le vamos asignar el arreglo
     // generarEmpresa();
      
    })
    .catch((error) => {
      console.error(error);
    });
}

function updateFormValueUsuario(data){
  document.getElementById('nombre').value=data.nombre
  document.getElementById('apellido').value=data.apellido
  document.getElementById('genero').value=data.genero
  document.getElementById('correo').value=data.correo
 
  document.getElementById('direccion').value=data.direccion
  document.getElementById('telefono').value=data.telefono

}










//guardar Usuario
function  guardarUsuario(){
 
    let usuario = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      genero: document.getElementById('genero').value,
      correo: document.getElementById('correo').value,
      contrasena: document.getElementById('contrasena').value,
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
      correo: document.getElementById('correo').value,
      contrasena: document.getElementById('contrasena').value,
      direccion: document.getElementById('direccion').value,
      telefono: document.getElementById('telefono').value
      
     
    };
  console.log('Usuario a actualizar', usuario);
  //servidor ahora
  axios({
    method:'PUT',
    url:url2 +`?id=${obtenerIdUsuario()}`,
    responseType:'json',
    data:usuario
   }).then((res)=>{
       console.log(res);
   }).catch((error)=>{
       console.error(error);
   });
  
  
  
  }
  