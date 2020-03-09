/*funcion redirigir  el registro segun el tipo */
function registro(){
    let tipo = document.getElementById('registro').value
    console.log(tipo)
    if (tipo==='2') {
        console.log("hola")
        window.location="./empresa.html"
    } else {
        window.location="./logincl.html"
    }
}

/*para redirigir ala pagina de cliente s*/
function ingresar(){
    window.location="./pag_clientes/principal.html"
}
/*para redirigir ala pagina de cliente s*/
function verDetalles(){
    console.log("hola")
    window.location="index.html"
}

/*efectos en e3l archivo principales.js */
var imagenes = [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var galeria = document.getElementById('galeria');
for (imagen of imagenes) {
  galeria.innerHTML += `
<div class="card">
<a href="#" data-toggle="modal" data-target="#id${imagen}">
<img src="../img/${imagen}.png" alt="" class="card-img-top">
</a>
</div>
<!-- Modal -->
<div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<button type="button" class="close  mr-2 " data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>

<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
<img src="../img/${imagen}.png" alt="" class="img-fluid rounded">
</div>
</div>
`
}

