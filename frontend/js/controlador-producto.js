const url='../../Cat-by/backend/api/productos.php';
const url1 = "../../Cat-by/backend/api/empresas.php";
const url2='../../Cat-by/backend/api/promociones.php';
var empresas = [];
var producto = [];

//var empresaSeleccionada;




//guardar Producto
function  guardarProducto(){
 
    let producto = {
        image:"Cat-by/frontend/img/" + document.getElementById("image").files[0].name,
        nombreProducto: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precio').value,
        cantidad: document.getElementById('cantidad').value,
        categoria: document.getElementById('categoria').value,
        descripcion: document.getElementById('descripcion').value,
        direccion: document.getElementById('direccion').value,
        longitud: document.getElementById('longitud').value,
        latitud: document.getElementById('latitud').value,
     
        
     
    };
  console.log('Producto a guardar', producto)
  //servidor ahora

  axios({
    method:'POST',
    url:url +`?id=${0}`,
    responseType:'json',
    data:producto
   }).then((res)=>{
       console.log(res);
      
   }).catch((error)=>{
       console.error(error);
   });
  
 
  
  
  }

  
  

  //guardar Producto en promocion
  function  guardarPromocion(){
   
      let promocion = {
          nombreProducto: document.getElementById('nombreProducto').value,
          categoria: document.getElementById('categoria').value,
          precioAntes: document.getElementById('precioAntes').value,
          precioAhora: document.getElementById('precioAhora').value,
          descuento: document.getElementById('descuento').value,
          fechaInicio: document.getElementById('fechaInicio').value,
          fechaLimite: document.getElementById('fechaLimite').value,
          ubicacionsucursal: document.getElementById('ubicacionsucursal').value,
          evaluacion:[]
       
  
  
       
      };
    console.log('Promocion a guardar', promocion)
    //servidor ahora
    axios({
      method:'POST',
      url:url2 +`?id=${0}`,
      responseType:'json',
      data:promocion
     }).then((res)=>{
         console.log(res);
     }).catch((error)=>{
         console.error(error);
     });
    
     
    
    }
  
  


  
      
  
  
  