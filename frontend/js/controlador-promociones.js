const url='http://localhost/poo/Cat-by-master-V/api/promociones.php';


//guardar Producto
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
    url:url +`?id=${0}`,
    responseType:'json',
    data:promocion
   }).then((res)=>{
       console.log(res);
   }).catch((error)=>{
       console.error(error);
   });
  
   login();
  
  }




    


