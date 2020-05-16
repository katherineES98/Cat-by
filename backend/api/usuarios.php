<?php
    //echo 'Informacion: ' . file_get_contents('php://input');
   
    include_once("../clases/class-usuario.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
             $usuario = new Usuario( 
                  $_POST['nombre'],
                  $_POST['apellido'], 
                  $_POST['genero'], 
                  $_POST['contrasena'],
                  $_POST['correo'],
                  $_POST['direccion'], 
                  $_POST['telefono']
               
                
                );
          echo $usuario->guardarUsuario();

           
        break;
        case 'GET': //obtener
          if (isset($_GET['id'])){
            Usuario:: obtenerUsuario($_GET['id']);
           
        }else{
            Usuario::obtenerUsuarios();
        }
            
        break;
        case 'PUT':
          $_PUT = json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario( 
              $_PUT['nombre'],
             $_PUT['apellido'], 
             $_PUT['genero'], 
             $_PUT['contrasena'],
             $_PUT['correo'], 
             $_PUT['direccion'], 
             $_PUT['telefono']
           
            );
            $usuario->actualizarUsuario($_GET['id']);
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
            ",  Informacion a actualizar: ".json_encode($_PUT);
              echo json_encode($resultado);
        break;
        
        case 'DELETE':
          Usuario::eliminarUsuario($_GET["id"]);
          $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
          echo json_encode($resultado);
           
        break;
    }
?>