

function login(){
    validarCampoVacio('nombreproducto');
    validarCampoVacio('Precio');
    validarCampoVacio('Cantidad');
    validarCampoVacio('Descripcion');
    validarCampoVacio('Direccion');
    validarCampoVacio('Latitud');
    validarCampoVacio('Longitud');
   
  
}

function validarCampoVacio(id){
    if (document.getElementById(id).value == ''){
        document.getElementById(id).classList.remove('input-success');
        document.getElementById(id).classList.add('input-error');
    }else{ 
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(id).classList.add('input-success');
    }
}
