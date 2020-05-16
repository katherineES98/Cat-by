

function login(){
    validarCampoVacio('image');
    validarCampoVacio('nombreProducto');
    validarCampoVacio('precio');
    validarCampoVacio('cantidad');
    validarCampoVacio('categoria');
    validarCampoVacio('descripcion');
    validarCampoVacio('direccion');
    validarCampoVacio('longitud');
    validarCampoVacio('latitud');

    
  
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