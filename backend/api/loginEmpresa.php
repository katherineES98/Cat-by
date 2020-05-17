<?php
 session_start();
   header("Content-Type: application/json");
    include_once("../clases/class-empresa.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            //verificar si el usuario exite

            $Empresa= Empresa:: verificarEmpresa($_POST['correo'] , $_POST['contrasena']);
            if($Empresa){
            $resultado=array(
                "codigoResultado"=>1,
                "mensaje"=>"Usuario autenticado",
                "token"=>sha1(uniqid(rand(),true))
  
               );
               $_SESSION["token"] = $resultado["token"];
               setcookie("token",$resultado["token"],time()+(60*60*24*31),"/");
               setcookie("nombreEmpresa",$Empresa[0]["nombreEmpresa"],time()+(60*60*24*31),"/");
               setcookie("correo",$Empresa[0]["correo"],time()+(60*60*24*31),"/");
               setcookie("id",$Empresa[1],time()+(60*60*24*31),"/");
            echo json_encode($resultado);
     } else{
        setcookie("token","",time()-1,"/");
        setcookie("nombreEmpresa","",time()-1,"/");
        setcookie("correo","",time()-1,"/");
        setcookie("id","",time()-1,"/");
             echo '{"codigoResultado":0,"mensaje":"Usuario/Contraseña incorrectos"}';
            }
            break;
            
       
    }
?>