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

function validarURL(etiqueta){
    console.log(etiqueta.value);
    var re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}

function validarNumerotarjeta(etiqueta){
    console.log(etiqueta.value);
    var re = /^(?:\d{15,16}|\d{4}(?:(?:\s+\d{4}){3}|\s+\d{6}\s\d{5}))$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}


function validarFechavenc(etiqueta){
    console.log(etiqueta.value);
    var re = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/-](?:0?[1-9]|1[0-2])|(?:29|30)[/-](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/-](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/-]0?2[/-](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
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

function validarLatitud(etiqueta){
    console.log(etiqueta.value);
    var re = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}


function validarLongitud(etiqueta){
    console.log(etiqueta.value);
    var re = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    if (re.test(etiqueta.value)){
        etiqueta.classList.remove('input-error');
        etiqueta.classList.add('input-success');
    }else{ 
        etiqueta.classList.remove('input-success');
        etiqueta.classList.add('input-error'); 
    }
}


function login(){
    validarCampoVacio('nombreEmpresa');
    validarCampoVacio('correo');
    validarCampoVacio('contrasena');
    validarCampoVacio('mision');
    validarCampoVacio('vision');
    validarCampoVacio('descripcionEmpresa');
    validarCampoVacio('direccion');
    validarCampoVacio('pais');
    validarCampoVacio('ciudad');
    validarCampoVacio('telefono');
    validarCampoVacio('redesSociales');
    validarCampoVacio('URL');
    validarCampoVacio('latitud');
    validarCampoVacio('longitud');
    validarCampoVacio('propietario');
    validarCampoVacio('numeroTarjeta');
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
