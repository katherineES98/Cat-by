<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");
    include_once("../clases/class-evaluaciones.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
             $evaluacion = new Evaluacion( 
                  $_POST['comentario'],
                  $_POST['calificacion'],
                  $_POST['idUsuario']
                  
                 
                );
          echo $evaluacion->guardarEvaluacion($_GET['id'],$_GET['index']);

           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            Evaluacion:: obtenerEvaluaciones($_GET['id'],$_GET['index']);
           
        }else{
            Evaluacion::obtenerEvaluacion($_GET['indice'],$_GET['index'],$_GET['id']);
            
        }
   
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $evaluacion = new Evaluacion( 
              $_PUT['comentario'],
             $_PUT['calificacion'],
             $_PUT['idUsuario'] 
            
           
            );
            $evaluacion->actualizarEvaluacion($_GET['id'],$_GET['index'],$_GET['indice']);
            $resultado["mensaje"] =  "Actualizar Evaluacion favorita con el id: " .$_GET['id'].$_GET['index'].$_GET['indice'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
        break;
        
        case 'DELETE':
            Evaluacion::eliminarEvaluacion($_GET["id"],$_GET["index"],$_GET["indice"]);
            $resultado["mensaje"] = "Eliminar Evaluacion con el id: ".$_GET['id'].$_GET['index'].$_GET['indice'];
            echo json_encode($resultado);
           
        break;
    }
?>