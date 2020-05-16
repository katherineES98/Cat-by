<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
    header("Content-Type: application/json");
    include_once("../clases/class-promocion.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $promocion = new Promocion( 
                $_POST['nombreProducto'],
                $_POST['categoria'], 
                $_POST['precioAntes'], 
                $_POST['precioAhora'],
                $_POST['descuento'],
                $_POST['fechaInicio'], 
                $_POST['fechaLimite'],
                $_POST['ubicacionsucursal']

              
              );
        echo  $promocion ->guardarPromocion($_GET['id']);
           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            Promocion:: obtenerPromociones($_GET['id']);
           
        }else{
            Promocion:: obtenerPromocion($_GET['id'],$_GET['index']);
            
        }
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $promocion = new Promocion( 
              $_PUT['nombreProducto'],
             $_PUT['categoria'], 
             $_PUT['precioAntes'], 
             $_PUT['precioAhora'],
             $_PUT['descuento'], 
             $_PUT['fechaInicio'], 
             $_PUT['fechaLimite'],
             $_PUT['ubicacionsucursal']

           
            );
            $promocion->actualizarPromocion($_GET['id'],$_GET['index']);
            $resultado["mensaje"] =  "Actualizar Promocion con el id: " .$_GET['id'].$_GET['index'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
          
        break;
        
        case 'DELETE':
            Promocion::eliminarPromocion($_GET["id"],$_GET["index"]);
            $resultado["mensaje"] = "Eliminar una Promocion con el id: ".$_GET['id'].$_GET['index'];
            echo json_encode($resultado);
          
        break;
    }
?>