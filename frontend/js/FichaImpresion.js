
 const url1 = "../../Cat-by/backend/api/empresas.php";
 var empresa=[];
 obtenerEmpresaId()
 
 function optenerId(){
    let kokie 
    let idEmpresa
    let aCookies = document.cookie.split(";");
    for (let i = 0; i < aCookies.length; i++) {
      kokie=aCookies[i].split("=")
      if(kokie[0]===" id"){
        console.log(kokie[1])
         idEmpresa=kokie[1]
      }
    }
    return idEmpresa
  }

function obtenerEmpresaId(){

    console.log("id a buscar: ",optenerId());
    axios({
      method: "GET",
      url: url1+`?id=${optenerId()}`,
      responseType: "json"
    })
      .then((res) => {
        console.log(res.data);

        this.empresa = res.data;
        llenarProducto(res.data)
       console.log(empresa);
        //al  momento que responda el servidor le vamos asignar el arreglo
       // generarEmpresa();
        
      })
      .catch((error) => {
        console.error(error);
      });
  }
  



function llenarProducto(data) {
    console.log(data);
    document.getElementById("producto").innerHTML = "";
        for (let k = 0; k < data.promociones.length; k++) {
            document.getElementById("producto").innerHTML += `
            <option value="${k}">${data.promociones[k].nombreProducto}</option>
        
            `; 
    }
}

function seleccionarSelect(){
  document.getElementById("descuento").innerHTML=`
  <span class="descuento">${empresa.promociones[document.getElementById("producto").value].descuento}</span>
  
  `


document.getElementById("nombreP").innerHTML=`
<h5>${empresa.promociones[document.getElementById("producto").value].descripcion}</h5>

`
document.getElementById("imagen").innerHTML=`
<img src="${empresa.promociones[document.getElementById("producto").value].image}" width="123" height="123" />

`



}


function imprimirPDF(){
  print();
}