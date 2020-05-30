const url = "../../Cat-by/backend/api/empresas.php";
var empresas = [];

obtenerEmpresas();
function obtenerEmpresas() {
    axios({
      method: "GET",
      url: url,
      responseType: "json",
    })
      .then((res) => {
        console.log(res.data);
        this.empresas = res.data;
        generarEmpresas(res.data)
        //al  momento que responda el servidor le vamos asignar el arreglo
        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function generarEmpresas(data){
    console.log("esta son las empresas",data);
    document.querySelector('#superadmi tbody').innerHTML="";
for (let i = 0; i < data.length; i++) {
    document.querySelector('#superadmi tbody').innerHTML+=`
    
    <tr>
                    
                    
  <td data-label="Logo"> 
      <a href="#">   <img class="img-fluid" src="${data[i].logo}" /></a>
  </td>
  <td data-label="Nombre Empresa">${data[i].nombreEmpresa}</td>
  <td data-label="Correo">${data[i].correo}</td>
 
  <td data-label="Descripcion">${data[i].descripcionEmpresa}</td>
  
  <td data-label="Telefono">${data[i].telefono}</td>
  <td data-label="Dureccion">${data[i].direccion}</td>
  <td data-label="Ciudad">${data[i].ciudad}</td>
  <td data-label="Quitar">
      <a href="#">
          <i onClick="deleteCompany(${i})" class="fas fa-times"></i>
      </a>
  </td>
</tr>

    
    
    `
    
}


  }

  function deleteCompany(emp){
    console.log("eliminar empresa" ,emp);
    axios({
        method: "DELETE",
        url: url+`?id=${emp}`,
        responseType: "json"
      })
        .then((res) => {
          console.log(res.data);
          obtenerEmpresas();
        
        })
        
        .catch((error) => {
          console.error(error);
        });

  }

  