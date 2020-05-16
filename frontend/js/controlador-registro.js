/*funcion redirigir  el registro segun el tipo */
function registro(){
    let tipo = document.getElementById('registro').value
    console.log(tipo)
    if (tipo==='2') {
        console.log("hola")
        window.location="./loginEmpresa.html"
    } else {
        window.location="./logincl.html"
    }
}

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


/*para redirigir ala pagina de cliente s*/
function ingresar(){
    validarCampoVacio('contraseña');
    window.location="cuentausuario.html"
   
   
  
}

function ingresarempresa(){
    validarCampoVacio('contraseña');
    window.location="./pag_empresas/cuentaEmpresarial.html"
   
  
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
/*para redirigir ala pagina de cliente s*/
function verDetalles(){
    console.log("hola")
    window.location="produc.html"
}

/*efectos en e3l archivo principales.js */

var imagenes = [1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,22];
var galeria = document.getElementById('galeria');
for (imagen of imagenes) {
  galeria.innerHTML+= `
<div class="card">
<a href="#" data-toggle="modal" data-target="#id${imagen}">
<img src="img/${imagen}.png" alt="" class="card-img-top">
</a>
</div>
<!-- Modal -->
<div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<button type="button" class="close  mr-2 " data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>

<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
<img src="img/${imagen}.png" alt="" class="img-fluid rounded">
</div>
</div>
`
}

