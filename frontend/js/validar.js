function validarUsuario(){
var nombre,apellido,genero,contraseña,correo,direccion,telefono,re; 
nombre = document.getElementById("nombre").value;
apellido = document.getElementById("apellido").value;
genero  = document.getElementById("genero").value;
contraseña  = document.getElementById("contrasena").value;
correo  = document.getElementById("correo").value;
direccion  = document.getElementById("direccion").value;
telefono  = document.getElementById("telefono").value;

re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(nombre==="" ||apellido===""||genero===""||contraseña===""||correo===""||direccion===""||telefono===""){
alert("Todos los campos son obligatorios");
return false;
}
else if(nombre.length>30){
    alert("El nombre es muy Largo");
    return false
}
else if(apellido.length>80){
    alert("El apellido es muy Largo");
    return false
}
else if(contraseña.length>8 || contraseña.length<4){
    alert("Contraseña debe tener entre 4-8 caracteres");
    return false
}

else if(correo.length>100){
    alert("El correo es muy Largo");
    return false
}
else if(!(re.test(correo))){
    alert("El correo no es valido");
    return false
}
else if(direccion.length>20){
    alert("la Direccion es muy Largo");
    return false
}
else if(telefono.length>10){
    alert("El Telefono es muy Largo");
    return false
}
else if(isNaN(telefono)){
    alert("El Telefono ingresado no es un numero");
    return false
}
else {
    alert("Datos Correctos");
    guardarUsuario();
    return true
}

}

function validarEmpresa(){
    var nombreEmpresa,correo,contrasena,logo,banner,mision,vision,re,re1,re2,descripcionEmpresa,direccion,pais,ciudad,telefono,redesSociales,URL,latitud,longitud,pago,plan,propietario,vencimiento,cvv,numeroTarjeta; 
    nombreEmpresa = document.getElementById("nombreEmpresa").value;
    correo = document.getElementById("correo").value;
    contrasena  = document.getElementById("contrasena").value;
    logo  = document.getElementById("logo").value;
    banner  = document.getElementById("banner").value;
    mision  = document.getElementById("mision").value;
    vision  = document.getElementById("vision").value;
    descripcionEmpresa = document.getElementById("descripcionEmpresa").value;
    direccion = document.getElementById("direccion").value;
    pais  = document.getElementById("pais").value;
    ciudad  = document.getElementById("ciudad").value;
    telefono  = document.getElementById("telefono").value;
    redesSociales  = document.getElementById("redesSociales").value;
    URL  = document.getElementById("URL").value;
    latitud  = document.getElementById("latitud").value;
    longitud  = document.getElementById("longitud").value;
    propietario= document.getElementById("propietario").value;
    pago  = document.getElementById("pago").value;
    plan  = document.getElementById("plan").value;
    vencimiento  = document.getElementById("vencimiento").value;
    cvv  = document.getElementById("cvv").value;
    numeroTarjeta  = document.getElementById("numeroTarjeta").value;

    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re1 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
     re2 =/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
    if(nombreEmpresa==="" ||correo===""||contrasena===""||mision===""||vision===""||descripcionEmpresa===""||direccion===""||pais===""||ciudad===""||telefono===""||redesSociales===""||URL===""||latitud===""||longitud===""||pago===""||
    plan===""||propietario===""||vencimiento===""||cvv===""||numeroTarjeta===""){
        alert("Todos los campos son obligatorios");
        return false;
        }
        else if(nombreEmpresa.length>30){
            alert("El nombre es muy Largo");
            return false
        }
        else if(correo.length>100){
            alert("El correo es muy Largo");
            return false
        }
        else if(!(re.test(correo))){
            alert("El correo no es valido");
            return false
        }
        else if(contrasena.length>8 || contrasena.length<4){
            alert("Contraseña debe tener entre 4-8 caracteres");
            return false
        }
        
        else if(mision.length>100 || mision.length<10){
            alert("La mision debe tener entre 10 a 100 caracteres");
            return false
        }
        
       
        else if(vision.length>100 || vision.length<10){
            alert("La Vision debe tener entre 10 a 100 caracteres");
            return false
        }
        else if(descripcionEmpresa.length>50 || descripcionEmpresa.length<10){
            alert("La descripcion debe tener entre 10 a 100 caracteres");
            return false
        }
        else if(direccion.length>20){
            alert("La Direccion es muy larga");
            return false
        }
        else if(pais.value==0 || pais.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(ciudad.length>10){
            alert("el nombre de la Ciudad  es muy Largo");
            return false
        }
        else if(isNaN(telefono)){
            alert("El Telefono ingresado no es un numero");
            return false
        }
        else if(redesSociales.value==0 || redesSociales.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(!(re1.test(URL))){
            alert("la URL no es valida");
            return false
        }
        else if(isNaN(latitud)){
            alert("El Telefono ingresado no es un numero");
            return false
        }
        else if(isNaN(longitud)){
            alert("El Telefono ingresado no es un numero");
            return false
        }
        else if(propietario.length>30){
            alert("El nombre es muy Largo");
            return false
        }
        else if(pago.value==0 || pago.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(plan.value==0 || plan.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(!(re2.test(vencimiento))){
            alert("El Vencimiento no es valido");
            return false
        }
        else if(isNaN(cvv)){
            alert("El CVV ingresado no es un numero");
            return false
        }
        else if(isNaN(numeroTarjeta)){
            alert("El Numero de Tarjeta ingresado no es un numero");
            return false
        }
        else {
            alert("Datos Correctos");
            guardarEmpresa();
           
            return true
        }


}
function validarEmpresaActalizada(){
    var nombreEmpresa,correo,logo,banner,mision,vision,re,re1,re2,descripcionEmpresa,direccion,pais,ciudad,telefono,redesSociales,URL,latitud,longitud,pago,plan,propietario,vencimiento,cvv,numeroTarjeta; 
    nombreEmpresa = document.getElementById("nombreEmpresa").value;
    correo = document.getElementById("correo").value;
    logo  = document.getElementById("logo").value;
    banner  = document.getElementById("banner").value;
    mision  = document.getElementById("mision").value;
    vision  = document.getElementById("vision").value;
    descripcionEmpresa = document.getElementById("descripcionEmpresa").value;
    direccion = document.getElementById("direccion").value;
    pais  = document.getElementById("pais").value;
    ciudad  = document.getElementById("ciudad").value;
    telefono  = document.getElementById("telefono").value;
    redesSociales  = document.getElementById("redesSociales").value;
    URL  = document.getElementById("URL").value;
    latitud  = document.getElementById("latitud").value;
    longitud  = document.getElementById("longitud").value;
    propietario= document.getElementById("propietario").value;
    pago  = document.getElementById("pago").value;
    plan  = document.getElementById("plan").value;
    vencimiento  = document.getElementById("vencimiento").value;
    cvv  = document.getElementById("cvv").value;
    numeroTarjeta  = document.getElementById("numeroTarjeta").value;

    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re1 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
     re2 =/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
    if(nombreEmpresa==="" ||correo===""||mision===""||vision===""||descripcionEmpresa===""||direccion===""||pais===""||ciudad===""||telefono===""||redesSociales===""||URL===""||latitud===""||longitud===""||pago===""||
    plan===""||propietario===""||vencimiento===""||cvv===""||numeroTarjeta===""){
        alert("Todos los campos son obligatorios");
        return false;
        }
        else if(nombreEmpresa.length>30){
            alert("El nombre es muy Largo");
            return false
        }
        else if(correo.length>100){
            alert("El correo es muy Largo");
            return false
        }
        else if(!(re.test(correo))){
            alert("El correo no es valido");
            return false
        }
        
        else if(mision.length>100 || mision.length<10){
            alert("La mision debe tener entre 10 a 100 caracteres");
            return false
        }
        
       
        else if(vision.length>100 || vision.length<10){
            alert("La Vision debe tener entre 10 a 100 caracteres");
            return false
        }
        else if(descripcionEmpresa.length>50 || descripcionEmpresa.length<10){
            alert("La descripcion debe tener entre 10 a 100 caracteres");
            return false
        }
        else if(direccion.length>20){
            alert("La Direccion es muy larga");
            return false
        }
        else if(pais.value==0 || pais.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(ciudad.length>10){
            alert("el nombre de la Ciudad  es muy Largo");
            return false
        }
        else if(isNaN(telefono)){
            alert("El Telefono ingresado no es un numero");
            return false
        }
        else if(redesSociales.value==0 || redesSociales.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(!(re1.test(URL))){
            alert("la URL no es valida");
            return false
        }
        else if(isNaN(latitud)){
            alert("El Telefono ingresado no es un numero");
            return false
        }
        else if(isNaN(longitud)){
            alert("El Telefono ingresado no es un numero");
            return false
        }
        else if(propietario.length>30){
            alert("El nombre es muy Largo");
            return false
        }
        else if(pago.value==0 || pago.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(plan.value==0 || plan.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(!(re2.test(vencimiento))){
            alert("El Vencimiento no es valido");
            return false
        }
        else if(isNaN(cvv)){
            alert("El CVV ingresado no es un numero");
            return false
        }
        else if(isNaN(numeroTarjeta)){
            alert("El Numero de Tarjeta ingresado no es un numero");
            return false
        }
        else {
            alert("Datos Correctos");
            actualizarEmpresa();
            return true
        }


}







function validarSucursal(){

var nombre,correo,telefono,pais,correo,ciudad,direccion,latitud,longitud,re; 
nombre = document.getElementById("nombre").value;
correo = document.getElementById("correo").value;
telefono  = document.getElementById("telefono").value;
pais = document.getElementById("pais").value;
ciudad  = document.getElementById("ciudad").value;
direccion  = document.getElementById("direccion").value;
latitud  = document.getElementById("latitud").value;
longitud  = document.getElementById("longitud").value;
re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(nombre==="" ||correo===""||telefono===""||pais===""||ciudad===""||direccion===""||latitud===""||longitud===""){
alert("Todos los campos son obligatorios");
return false;
}
else if(nombre.length>30){
    alert("El nombre es muy Largo");
    return false
}
else if(correo.length>100){
    alert("El correo es muy Largo");
    return false
}
else if(!(re.test(correo))){
    alert("El correo no es valido");
    return false
}
else if(isNaN(telefono)){
    alert("El Telefono ingresado no es un numero");
    return false
}
else if(pais.value==0 || pais.value=="" ){
    alert("Seleccione una opcion");
    return false
}
else if(ciudad.length>10){
    alert("el nombre de la Ciudad  es muy Largo");
    return false
}
else if(direccion.length>20){
    alert("La Direccion es muy larga");
    return false
}
else if(isNaN(latitud)){
    alert("El Telefono ingresado no es un numero");
    return false
}
else if(isNaN(longitud)){
    alert("El Telefono ingresado no es un numero");
    return false
}
else {
    alert("Datos Correctos");
    guardarSucursal();
    return true
}


}

function validarProducto(){
var image,nombreProducto,precio,cantidad,categoria,descripcion,direccion,latitud,longitud; 
image = document.getElementById("image").value;
nombreProducto = document.getElementById("nombreProducto").value;
precio  = document.getElementById("precio").value;
cantidad = document.getElementById("cantidad").value;
categoria  = document.getElementById("categoria").value;
descripcion  = document.getElementById("descripcion").value;
direccion  = document.getElementById("direccion").value;
latitud  = document.getElementById("latitud").value;
longitud  = document.getElementById("longitud").value;

if(nombreProducto===""||precio===""||cantidad===""||categoria===""||descripcion===""||direccion===""||latitud===""||longitud===""){
    alert("Todos los campos son obligatorios");
    return false;
    }
    else if(nombreProducto.length>30){
        alert("El nombre es muy Largo");
        return false
    }
    else if(isNaN(precio)){
        alert("El Precio ingresado no es un numero");
        return false
    }
    else if(isNaN(cantidad)){
        alert("La cantidad ingresado no es un numero");
        return false
    }
    else if(categoria.value==0 || categoria.value=="" ){
        alert("Seleccione una opcion");
        return false
    }
    else if(descripcion.length>50 || descripcion.length<10){
        alert("La descripcion debe tener entre 10 a 100 caracteres");
        return false
    }
    else if(direccion.length>20){
        alert("La Direccion es muy larga");
        return false
    }
    else if(isNaN(latitud)){
        alert("La latitud ingresado no es un numero");
        return false
    }
    else if(isNaN(longitud)){
        alert("la Longitud ingresado no es un numero");
        return false
    }
    else {
        alert("Datos Correctos");
        guardarProducto();
        return true
    }

}
function validarPromocion(){

    var nombreProducto,precioAntes,categoria,descuento,fechaInicio,fechaLimite,precioAhora,ubicacionsucursal; 
    nombreProducto = document.getElementById("nombreProducto").value;
    precioAntes = document.getElementById("precioAntes").value;
    categoria  = document.getElementById("categoria").value;
    descuento = document.getElementById("descuento").value;
    fechaInicio  = document.getElementById("fechaInicio").value;
    fechaLimite  = document.getElementById("fechaLimite").value;
    precioAhora  = document.getElementById("precioAhora").value;
    ubicacionsucursal  = document.getElementById("ubicacionsucursal").value;
    if(nombreProducto===""||precioAntes===""||categoria===""||descuento===""||fechaInicio===""||fechaLimite===""||precioAhora===""||ubicacionsucursal===""){
        alert("Todos los campos son obligatorios");
        return false;
        }
        else if(nombreProducto.value==0 || nombreProducto.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(isNaN(precioAntes)){
            alert("El Precio ingresado no es un numero");
            return false
        }
        else if(categoria.value==0 || categoria.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(descuento.value==0 || descuento.value=="" ){
            alert("Seleccione una opcion");
            return false
        }
        else if(isNaN(precioAhora)){
            alert("El Precio ingresado no es un numero");
            return false
        }
        else if(ubicacionsucursal.value==0 || ubicacionsucursal.value=="" ){
            alert("Seleccione una opcion");
            return false
        }

        else {
            alert("Datos Correctos");
            guardarPromocion();
            return true
        }
}
