const url = "../../Cat-by/backend/api/empresas.php";
const url1 = "../../Cat-by/backend/api/loginEmpresa.php";
const tests = "../../Cat-by/backend/api/empresasFavoritas.php";
var empresas = [];

console.log("imprimeindo windon location", window.location.search.substring(1));

if (window.location.search.substring(1)) {
  obtenerEmpresaId();
  //updateForm()
}
//const url1="../api/productos.php";

function updateFormValue(data) {
  document.getElementById("nombreEmpresa").value = data.nombreEmpresa;
  document.getElementById("correo").value = data.correo;
  
  document.getElementById("mision").value = data.mision;
  document.getElementById("vision").value = data.vision;
  document.getElementById("descripcionEmpresa").value = data.descripcionEmpresa;
  document.getElementById("direccion").value = data.direccion;
  document.getElementById("pais").value = data.pais;
  document.getElementById("ciudad").value = data.ciudad;
  document.getElementById("telefono").value = data.telefono;
  document.getElementById("img-logo").setAttribute("src",data.logo);
  document.getElementById("img-Banner").setAttribute("src",data.banner);
  document.getElementById("redesSociales").value = data.redesSociales;
  document.getElementById("URL").value = data.URL;
  document.getElementById("latitud").value = data.latitud;
  document.getElementById("longitud").value = data.longitud;
  document.getElementById("pago").value = data.pago;
  document.getElementById("plan").value = data.plan;
  document.getElementById("propietario").value = data.propietario;
  document.getElementById("numeroTarjeta").value = data.numeroTarjeta;
  document.getElementById("vencimiento").value = data.vencimiento;
  document.getElementById("cvv").value = data.cvv;
}
var empresas = [];
//var empresaSeleccionada;

function obtenerEmpresas() {
  axios({
    method: "GET",
    url: url,
    responseType: "json",
  })
    .then((res) => {
      console.log(res.data);
      this.empresas = res.data;
      //al  momento que responda el servidor le vamos asignar el arreglo
      generarEmpresa();
    })
    .catch((error) => {
      console.error(error);
    });
}

//generar las cards de una empresa
function generarEmpresa() {
  document.getElementById("empres").innerHTML = "";
  for (let i = 0; i < empresas.length; i++) {
    document.getElementById("empres").innerHTML += `
	<div class=" col-md-4 " >
                    <div class="card"  style="margin-bottom: 20px;">
						<img src="${empresas[i].logo}" class="card-img-top" alt="..." >
						<div class="card-body">
						<form style="text-align: center;">
                <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" onclick="valoracion(5)">
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" onclick="valoracion(4)">
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" onclick="valoracion(3)">
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" onclick="valoracion(2)">
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" onclick="valoracion(1)">
				<label for="radio5">★</label>
				
         </p>
      </form>
						  <h5 class="card-title"><b>${empresas[i].nombreEmpresa}</b></h5>

                          <p class="card-text" style="background-color: #FFFAF0!important;"><b> Descripcion :</b>  ${empresas[i].descripcionEmpresa}</p>
                          <hr>
                          <div>
                         
                          <div class="iconos" style="display: flex!important; align-items: center!important;justify-content: center!important;">
                          <i onClick="empresaFav('${i}')"data-toggle="modal" data-target="#exampleModal" class="fas fa-heart fa-2x" style=" background: #FF0000;font-size: 30px;  padding: 5px; color: white;" ></i>    
                         <i  onClick="cargarSucursales('${empresas[i].nombreEmpresa}')" class="far fa-building fa-2x iconos" style="margin-left:20px!important; background: #0000CD;font-size: 30px;  padding: 5px; color: white;" ></i>

                         </div>
                        
                          </div>
                          </div>
                      </div>
                </div>
            
                
             
                
               
		
		`;
  }
}
function optenerId() {
  let kokie;
  let idEmpresa;
  let aCookies = document.cookie.split(";");
  for (let i = 0; i < aCookies.length; i++) {
    kokie = aCookies[i].split("=");
    if (kokie[0] === " id") {
      console.log(kokie[1]);
      idEmpresa = kokie[1];
    }
  }
  return idEmpresa;
}
function obtenerEmpresaId() {
  console.log("id a buscar: ", optenerId());
  axios({
    method: "GET",
    url: url + `?id=${optenerId()}`,
    responseType: "json",
  })
    .then((res) => {
      console.log(res.data);
      this.empresas = res.data;
      updateFormValue(res.data);
      //al  momento que responda el servidor le vamos asignar el arreglo
      // generarEmpresa();
    })
    .catch((error) => {
      console.error(error);
    });
}

//cargalas sucursales de la modal
function cargarSucursales(nombreS) {
  $("#modal2").modal("show");
  document.getElementById("modalTitulo").innerHTML = "";
  document.getElementById("modalTitulo").innerHTML += `
	<h5 class="modal-title tituloCategoria" id="exampleModalCenterTitle"><b>${nombreS}</b></h5>
	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		<span aria-hidden="true">&times;</span>
	</button>
`;
  document.getElementById("sucur").innerHTML = "";
  for (let i = 0; i < empresas.length; i++) {
    if (empresas[i].nombreEmpresa == nombreS) {
      for (let j = 0; j < empresas[i].sucursales.length; j++) {
        document.getElementById("sucur").innerHTML = `
			<div class="card">
			<div class="card-header">
			<b>Informacion de la Empresa</b>
			</div>
			<div class="card-body">
        <form>
        <div class="row">
        <div class="col-md-12 col-lg-12" >
            <div>
                <div class="d-flex">
                    <div class="text1">Ubicacion de La Empresa</div>
                 <div class="ml-auto"><p><a href="mapa.html?log=${empresas[i].longitud}&lat=${
                        empresas[i].latitud
                      }">Ver Mapa</a></p>
                    </div> 
                </div>
            </div>
        </div>

    </div>


       

					<div class="form-group">
            
          <div class="alert alert-success" role="alert">
          Sucursales:
         </div>
          

					  <select class="form-control" onchange="sucursalesinfor(this.value , ${i})" >

					 ${llenarSelectSucursal(empresas[i].sucursales)}
					   
					  </select>
          </div>
          
					  </div>
					  <center>
					  <div class="form-group row"">
					  <label  class="col-sm-4 "> Correo: </label>
					  <div class="col-sm-6" id="correo">
					
						</div>
					  </div>
					  </center>
					  <center>
					  <div class="form-group row">
						<label  class="col-sm-4 "> Direccion: </label>
						<div class="col-sm-6" id="direccion">
					
						</div>
					  </div>
					  </center>
					  <center>
					  <div class="form-group row">
						<label for="staticEmail" class="col-sm-4 col-form-label">Telefono</label>
						<div class="col-sm-6" id="telefono" >
					
						</div>
            </div>
            <div class="form-group row">
						<label for="staticEmail" class="col-sm-4 col-form-label">Mapa</label>
						<div class="col-sm-6" id="ubicacion">
					
						</div>
					  </div>
					  </center>
				  </form>
			  
      </div>
      </div>
				




		  
			
			`;
      }
    }
  }
}
//llenar sucursal del seect de la modal
function llenarSelectSucursal(sucursalE) {
  let sucursales1 = "";
  for (let r = 0; r < sucursalE.length; r++) {
    sucursales1 += `
	<option value="${r}">${sucursalE[r].nombre}</option>
	
	`;
  }
  return sucursales1;
}





//genera extrellas no se si funciona aun
function valoracion(valor) {
  console.log(valor);
}

//funcion guardar una empresa  revisarlaaaa porque la data da null pero guarda ya
function guardarEmpresa() {
  let empresa = {
    nombreEmpresa: document.getElementById("nombreEmpresa").value,
    descripcionEmpresa: document.getElementById("descripcionEmpresa").value,
    correo: document.getElementById("correo").value,
    contrasena: document.getElementById("contrasena").value,
    logo: "img/empresas/" + document.getElementById("logo").files[0].name,
    banner: "img/empresas/" + document.getElementById("banner").files[0].name,
    mision: document.getElementById("mision").value,
    vision: document.getElementById("vision").value,
    direccion: document.getElementById("direccion").value,
    pais: document.getElementById("pais").value,
    ciudad: document.getElementById("ciudad").value,
    telefono: document.getElementById("telefono").value,
    redesSociales: document.getElementById("redesSociales").value,
    URL: document.getElementById("URL").value,
    latitud: document.getElementById("latitud").value,
    longitud: document.getElementById("longitud").value,
    pago: document.getElementById("pago").value,
    propietario: document.getElementById("propietario").value,
    numeroTarjeta: document.getElementById("numeroTarjeta").value,
    vencimiento: document.getElementById("vencimiento").value,
    cvv: document.getElementById("cvv").value,
    plan: document.getElementById("plan").value,
    sucursales: [],
    productos: [],
    promociones: [],
  };
  console.log("Empresa a guardar", empresa);

  axios({
    method: "POST",
    url: url,
    responseType: "json",
    data: empresa,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

//funcion para actualizar empresa aun no lo termino revisar depues

function actualizarEmpresa() {
  let empresa = {
    nombreEmpresa: document.getElementById("nombreEmpresa").value,
    descripcionEmpresa: document.getElementById("descripcionEmpresa").value,
    correo: document.getElementById("correo").value,
    contrasena: document.getElementById("contrasena").value,
    logo:
      "img/empresas/" + document.getElementById("logo").files[0].name,
    banner:
      "img/empresas/" + document.getElementById("banner").files[0].name,
    mision: document.getElementById("mision").value,
    vision: document.getElementById("vision").value,
    direccion: document.getElementById("direccion").value,
    pais: document.getElementById("pais").value,
    ciudad: document.getElementById("ciudad").value,
    telefono: document.getElementById("telefono").value,
    redesSociales: document.getElementById("redesSociales").value,
    URL: document.getElementById("URL").value,
    latitud: document.getElementById("latitud").value,
    longitud: document.getElementById("longitud").value,
    pago: document.getElementById("pago").value,
    propietario: document.getElementById("propietario").value,
    numeroTarjeta: document.getElementById("numeroTarjeta").value,
    vencimiento: document.getElementById("vencimiento").value,
    cvv: document.getElementById("cvv").value,
    plan: document.getElementById("plan").value,
  };
  console.log("Empresa a actualizar", empresa);
  //servidor ahora
  axios({
    method: "PUT",
    url: url + `?id=${optenerId()}`,
    responseType: "json",
    data: empresa,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

function loginEmpresa() {
  axios({
    method: "POST",
    url: url1,
    responseType: "json",
    data: {
      correo: document.getElementById("correoEmpresa").value,
      contrasena: document.getElementById("passwordEmpresa").value,
    },
  })
    .then((res) => {
      if (res.data.codigoResultado == 1) {
        window.location.href = "./cuentaEmpresarial.php";
      } else {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = res.data.mensaje;
      }
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

function obtenerIdUsuario() {
  let kokie;
  let idUsuario;
  let aCookies = document.cookie.split(";");
  for (let i = 0; i < aCookies.length; i++) {
    kokie = aCookies[i].split("=");
    if (kokie[0] === " id") {
      console.log(kokie[1]);
      idUsuario = kokie[1];
    }
  }
  return idUsuario;
}

function empresaFav(k) {
  console.log("este es la empresa favorita al guardar", k);
  let favoriteCompany = {
    logo: empresas[k].logo,
    nombreEmpresa: empresas[k].nombreEmpresa,
    descripcionEmpresa: empresas[k].descripcionEmpresa,
    direccion: empresas[k].direccion,
  };
  console.log("Empresa Favorita a guardar", favoriteCompany);

  axios({
    method: "POST",
    url: tests + `?id=${obtenerIdUsuario()}`,
    responseType: "json",
    data: favoriteCompany,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}


//funcion para visulaizar las imagen en el div del input Logo:
function readURLogo(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
          $('#img-visualizar-logo').attr('src', e.target.result);
      }


      reader.readAsDataURL(input.files[0]);
  }
}

   //('#image').change(function() {
  //readURL(this);
//});    

//funcion para visulaizar las imagen en el div del input Banner:
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
          $('#img-visualizar-banner').attr('src', e.target.result);
      }


      reader.readAsDataURL(input.files[0]);
  }
}

   //('#image').change(function() {
  //readURL(this);
//});

//obtener la informacion de cada sucursal
function sucursalesinfor(sucursal,empresa){
console.log( "la empresa con id:",empresas[empresa].nombreEmpresa);
console.log( "la sucursal con id:",empresas[empresa].sucursales[sucursal].nombre);
// agrgar el html para que sea dinamico  en la modal no olvidar agrgar el html y incrustar esto
// empresas[empresa].sucursales[sucursal].nombre
document.getElementById("correo").innerHTML=`
<p>${empresas[empresa].sucursales[sucursal].correo}</p>
`
document.getElementById("direccion").innerHTML=`
<p>${empresas[empresa].sucursales[sucursal].direccion}</p>

`
document.getElementById("telefono").innerHTML=`
<p>${empresas[empresa].sucursales[sucursal].telefono}</p>


`
document.getElementById("ubicacion").innerHTML=`
<p><a href="mapa.html?log=${empresas[empresa].sucursales[sucursal].longitud}&lat=${
  empresas[empresa].sucursales[sucursal].latitud
}">Ver Mapa</a></p>


`


}

//visualizar imgen logo de actualizar empresa logo

function readURLogoEmpresa(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
          $('#img-logo').attr('src', e.target.result);
      }


      reader.readAsDataURL(input.files[0]);
  }
}

//visualizar imagen de actualizar empresa banner 
function readURBannerEmpresa(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
          $('#img-Banner').attr('src', e.target.result);
      }


      reader.readAsDataURL(input.files[0]);
  }
}