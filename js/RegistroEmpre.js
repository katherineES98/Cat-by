function validarEmail(etiqueta){
    console.log(etiqueta.value);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}

function login(){
    validarCampoVacio('nombre');
    validarCampoVacio('Correo');
    validarCampoVacio('contraseña');
    validarCampoVacio('mision');
    validarCampoVacio('vision');
    validarCampoVacio('direccion');
    validarCampoVacio('pais');
    validarCampoVacio('ciudad');
    validarCampoVacio('telefono');
    validarCampoVacio('redes');
    validarCampoVacio('URL');
    validarCampoVacio('Latitud');
    validarCampoVacio('Longitud');
    validarCampoVacio('nombrepro');
    validarCampoVacio('numerot');
    validarCampoVacio('vencimiento');
    validarCampoVacio('cvv');
   
   
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
