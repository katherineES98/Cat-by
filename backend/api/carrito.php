<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   header("Content-Type: application/json");
    include_once("../clases/class-carrito.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
             $carrito = new Carrito( 
              $_POST['image'],
              $_POST['nombreProducto'],
              $_POST['categoria'], 
              $_POST['descripcion'], 
              $_POST['precioAntes'], 
              $_POST['precioAhora'],
              $_POST['descuento'],
              $_POST['fechaInicio'], 
              $_POST['fechaLimite'],
              $_POST['ubicacionsucursal']
                
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
              $_POST['image'],
              $_POST['nombreProducto'],
              $_POST['categoria'], 
              $_POST['descripcion'], 
              $_POST['precioAntes'], 
              $_POST['precioAhora'],
              $_POST['descuento'],
              $_POST['fechaInicio'], 
              $_POST['fechaLimite'],
              $_POST['ubicacionsucursal']


           
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