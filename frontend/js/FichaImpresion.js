
 const url1 = "../../Cat-by/backend/api/empresas.php";
 
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

        this.empresas = res.data;
        llenarProducto(res.data)
       
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
            <option value="${data.promociones[k].nombreProducto}">${data.promociones[k].nombreProducto}</option>
        
            `;
            
        
      
    }


}


