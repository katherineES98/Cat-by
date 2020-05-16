<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");
    include_once("../clases/class-promocionesFavorita.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
             $promocionesfavorita = new PromocionesFavorita( 
                  $_POST['imagen'],
                  $_POST['nombre'], 
                  $_POST['descripcion'], 
                  $_POST['precio']

                );
          echo $promocionesfavorita->guardarPromocionFavoritas($_GET['id']);

           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            PromocionesFavorita:: obtenerPromocionFavorita($_GET['id']);
           
        }else{
            PromocionesFavorita::obtenerPromocionFavoritas($_GET['id'],$_GET['index']);
            
        }
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $promocionesfavorita = new PromocionesFavorita( 
              $_PUT['imagen'],
             $_PUT['nombre'], 
             $_PUT['descripcion'], 
             $_PUT['precio']
             
             
           
            );
            $promocionesfavorita->actualizarPromocionFavorita($_GET['id'],$_GET['index']);
            $resultado["mensaje"] =  "Actualizar Promocion favorita con el id: " .$_GET['id'].$_GET['index'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
        break;
        
        case 'DELETE':
            PromocionesFavorita::eliminarPromocionFavorita($_GET["id"],$_GET["index"]);
            $resultado["mensaje"] = "Eliminar Promocion Favorita con el id: ".$_GET['id'].$_GET['index'];
            echo json_encode($resultado);
           
        break;
    }
?>
