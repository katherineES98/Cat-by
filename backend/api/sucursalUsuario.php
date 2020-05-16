<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   
    include_once("../clases/class-sucursalUsuario.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $sucursal = new Sucursal( 
                $_POST['nombre'],
                $_POST['correo'], 
                $_POST['telefono'], 
                $_POST['pais'],
                $_POST['ciudad'],
                $_POST['direccion'], 
                $_POST['latitud'],
                $_POST['longitud']
              
              );
        echo  $sucursal ->guardarSucursal($_GET['id'],$_GET['index']);
           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            Sucursal:: obtenerSucursale($_GET['id'],$_GET['index']);
           
        }else{
            Sucursal:: obtenerSucursales($_GET['id'],$_GET['index'],$_GET['indice']);
            
        }
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $sucursal = new Sucursal( 
              $_PUT['nombre'],
             $_PUT['correo'], 
             $_PUT['telefono'], 
             $_PUT['pais'],
             $_PUT['ciudad'], 
             $_PUT['direccion'], 
             $_PUT['latitud'],
             $_PUT['longitud']
           
            );
            $sucursal->actualizarSucursal($_GET['id'],$_GET['index'],$_GET['indice']);
            $resultado["mensaje"] =  "Actualizar sucursal con el id: " .$_GET['id'].$_GET['index'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
          
        break;
        
        case 'DELETE':
            Sucursal::eliminarSucursal($_GET["id"],$_GET["index"],$_GET['indice']);
            $resultado["mensaje"] = "Eliminar un sucursal con el id: ".$_GET['id'].$_GET['index'];
            echo json_encode($resultado);
          
        break;
    }
?>