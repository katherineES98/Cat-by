<?php
    header("Content-Type: application/json");
    include_once("../clases/class-producto.php");
    $_POST = json_decode(file_get_contents('php://input') , true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $producto = new Producto( 
                $_POST['image'],
                $_POST['nombreProducto'], 
                $_POST['precio'], 
                $_POST['cantidad'],
                $_POST['categoria'],
                $_POST['descripcion'], 
                $_POST['direccion']
               
              
              );
        echo  $producto ->guardarProducto($_GET['id']);

   
        break;
        case 'GET': //obtener
            if (isset($_GET['id'])){
                Producto:: obtenerProducto($_GET['id']);
               
            }else{
                Producto::obtenerProductos($_GET['id'],$_GET['index']);
            }
            
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto( 
                $_PUT['image'],
               $_PUT['nombreProducto'], 
               $_PUT['precio'], 
               $_PUT['cantidad'],
               $_PUT['categoria'], 
               $_PUT['descripcion'], 
               $_PUT['direccion']
              
             
             
              );
              $producto->actualizarProducto($_GET['id'],$_GET['index']);
              $resultado["mensaje"] =  "Actualizar Producto con el id: " .$_GET['id'].$_GET['index'].
              ",  Informacion a actualizar: ".json_encode($_PUT);
                echo json_encode($resultado);
            
           
        break;
        
        case 'DELETE':
            Producto::eliminarProducto($_GET["id"],$_GET["index"]);
            $resultado["mensaje"] = "Eliminar un Producto con el id: ".$_GET['id'].$_GET['index'];
            echo json_encode($resultado);
          
           
        break;
    }
?>