

function login(){
  
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
