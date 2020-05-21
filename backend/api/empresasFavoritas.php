<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");
    include_once("../clases/class-empresafavorita.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
             $empresaf = new EmpresaF( 
                  $_POST['logo'],
                  $_POST['nombreEmpresa'], 
                  $_POST['descripcionEmpresa'], 
                  $_POST['direccion']

                  
                 
                );
          echo $empresaf->guardarEmpresaFavorita($_GET['id']);

           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            EmpresaF:: obtenerEmpresaFavorita($_GET['id']);
           
        }else{
         // EmpresaF::obtenerEmpresaFavoritas($_GET['id'],$_GET['index']);
            
        }
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $empresaf = new EmpresaF( 
              $_PUT['logo'],
             $_PUT['nombreEmpresa'], 
             $_PUT['descripcionEmpresa'], 
             $_PUT['direccion']
             
           
            );
            $empresaf->actualizarEmpresaFavorita($_GET['id'],$_GET['index']);
            $resultado["mensaje"] =  "Actualizar empresa favorita con el id: " .$_GET['id'].$_GET['index'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
        break;
        
        case 'DELETE':
            EmpresaF::eliminarEmpresaFavorita($_GET["id"],$_GET["index"]);
            $resultado["mensaje"] = "Eliminar Empresa Favorita con el id: ".$_GET['id'].$_GET['index'];
            echo json_encode($resultado);
           
        break;
    }
?>