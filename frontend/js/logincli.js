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

function validarContraseña(etiqueta){
    console.log(etiqueta.value);
    var re = /^[a-z0-9_-]{6,18}$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}
function validarTelefono(etiqueta){
    console.log(etiqueta.value);
    var re = /^\d{3}-\d{3}-\d{3}$/;
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
    validarCampoVacio('apellido');
    validarCampoVacio('genero');
    validarCampoVacio('contrasena');
    validarCampoVacio('correo');
    validarCampoVacio('direccion');
    validarCampoVacio('telefono');
   
   
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
