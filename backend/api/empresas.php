<?php
   
    include_once("../clases/class-empresa.php");
    if(!isset($_SESSION["token"])){
        echo '{"mensaje":"Acceso no autorizado"}';
        exit;
        
            }
            if(!isset($_COOKIE["token"])){
                echo '{"mensaje":"Acceso no autorizado"}';
        exit;
            }
            
            if($_SESSION["token"] != $_COOKIE["token"] ){
                echo '{"mensaje":"Acceso no autorizado"}';
        exit;
            }
    $_POST = json_decode(file_get_contents('php://input') , true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            $empresa = new Empresa(
                $_POST['nombreEmpresa'],
                $_POST['descripcionEmpresa'],
                $_POST['correo'],
                $_POST['contrasena'],
                $_POST['logo'],
                $_POST['banner'],
                $_POST['mision'],
                $_POST['vision'],
                $_POST['direccion'],
                $_POST['pais'],
                $_POST['ciudad'],
                $_POST['telefono'],
                $_POST['redesSociales'],
                $_POST['URL'],
                $_POST['latitud'],
                $_POST['longitud'],
                $_POST['pago'],
                $_POST['propietario'],
                $_POST['numeroTarjeta'],
                $_POST['vencimiento'],
                $_POST['cvv'],
                $_POST['plan']
               
             );
          echo $empresa->guardarEmpresa();
            
        break;
        case 'GET': //obtener
            if (isset($_GET['id'])){
                Empresa:: obtenerEmpresa($_GET['id']);
               
            }else{
                Empresa::obtenerEmpresas();
            }
        break;
        case 'PUT':
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $empresa = new Empresa(
                  $_PUT["nombreEmpresa"], 
                  $_PUT["descripcionEmpresa"], 
                  $_PUT["correo"],
                  $_PUT["contrasena"],
                  $_PUT["logo"], 
                  $_PUT["banner"], 
                  $_PUT["mision"],
                  $_PUT["vision"],
                  $_PUT["direccion"], 
                  $_PUT["pais"], 
                  $_PUT["ciudad"],
                  $_PUT["telefono"],
                  $_PUT["redesSociales"], 
                  $_PUT["URL"],
                  $_PUT["latitud"], 
                  $_PUT["longitud"],
                  $_PUT["pago"], 
                  $_PUT["propietario"], 
                  $_PUT["numeroTarjeta"],
                  $_PUT["vencimiento"],
                  $_PUT["cvv"], 
                  $_PUT["plan"]
            
                );
                $empresa->actualizarEmpresa($_GET['id']);

            $resultado["mensaje"] =  "Actualizar un empresa con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: ".json_encode($_PUT);
            echo json_encode($resultado);
           
        break;
        
        case 'DELETE':
            Empresa::eliminarEmpresa($_GET["id"]);
            $resultado["mensaje"] = "Eliminar un Empresa con el id: ".$_GET['id'];
            echo json_encode($resultado);
           
        break;
    }
?>