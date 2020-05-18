const url='../../Cat-by/backend/api/productos.php';
const url1 = "../../Cat-by/backend/api/empresas.php";
const url2='../../Cat-by/backend/api/promociones.php';
var empresas = [];
var producto = [];

console.log("imprimeindo windon location",window.location.search.substring(1))

if(window.location.search.substring(1)){
    obtenerEmpresaId()
  //updateForm()
}

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
    url:url +`?id=${optenerId()}`,
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
      url:url2 +`?id=${optenerId()}`,
      responseType:'json',
      data:promocion
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
  
    function obtenerEmpresaId(){
  
        console.log("id a buscar: ",optenerId());
        axios({
          method: "GET",
          url: url1+`?id=${optenerId()}`,
          responseType: "json"
        })
          .then((res) => {
            console.log(res.data);

            this.empresas = res.data;
            llenarProducto(res.data)
            llenarSucursales(res.data)
            //al  momento que responda el servidor le vamos asignar el arreglo
           // generarEmpresa();
            
          })
          .catch((error) => {
            console.error(error);
          });
      }
      



    function llenarProducto(data) {
        console.log(data);
        document.getElementById("nombreProducto").innerHTML = "";
            for (let k = 0; k < data.productos.length; k++) {
                document.getElementById("nombreProducto").innerHTML += `
                <option value="${data.productos[k].nombreProducto}">${data.productos[k].nombreProducto}</option>
            
                `;
                
            
          
        }
    
    
    }
    
    function llenarSucursales(data) {
        console.log(data);
        document.getElementById("ubicacionsucursal").innerHTML = "";
            for (let k = 0; k < data.sucursales.length; k++) {
                document.getElementById("ubicacionsucursal").innerHTML += `
                <option value="${data.sucursales[k].nombre}">${data.sucursales[k].nombre}</option>
            
                `;
                
            
          
        }
    
    
    }
  
    



  
  
  