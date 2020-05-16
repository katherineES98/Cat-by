<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");
    include_once("../clases/class-carrito.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
             $carrito = new Carrito( 
                  $_POST['imagen'],
                  $_POST['nombreproducto'], 
                  $_POST['precio'], 
                  $_POST['cantidad'],
                  $_POST['descuento'],
                  $_POST['nombrePropietario'], 
                  $_POST['numeroTarjeta'], 
                  $_POST['vencimiento'],
                  $_POST['CVV'],
                  $_POST['total'], 
                  $_POST['formaPago'], 
                  $_POST['envio']
                
                );
          echo $carrito->guardarCarrito($_GET['id']);

           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            Carrito:: obtenerCarritos($_GET['id']);
           
        }else{
            Carrito::obtenerCarrito($_GET['id'],$_GET['index']);
            
        }
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $carrito = new Carrito( 
              $_PUT['imagen'],
             $_PUT['nombreproducto'], 
             $_PUT['precio'], 
             $_PUT['cantidad'],
             $_PUT['descuento'],
             $_PUT['nombrePropietario'], 
             $_PUT['numeroTarjeta'], 
             $_PUT['vencimiento'],
             $_PUT['CVV'], 
             $_PUT['total'],
             $_PUT['formaPago'],
             $_PUT['envio']


           
            );
            $carrito->actualizarCarrito($_GET['id'],$_GET['index']);
            $resultado["mensaje"] =  "Actualizar Carrito con el id: " .$_GET['id'].$_GET['index'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
        break;
        
        case 'DELETE':
            Carrito::eliminarCarrito($_GET["id"],$_GET["index"]);
            $resultado["mensaje"] = "Eliminar Carrito Favorita con el id: ".$_GET['id'].$_GET['index'];
            echo json_encode($resultado);
           
        break;
    }
?>