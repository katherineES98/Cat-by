<?php
session_start();
   header("Content-Type: application/json");
    include_once("../clases/class-usuario.php");
    $_POST = json_decode(file_get_contents('php://input'),true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST': //Guardar
            //verificar si el usuario exite
   $usuario= Usuario::verificarUsuario($_POST['correo'] , $_POST['contrasena']);
  if($usuario){
  $resultado=array(
    "codigoResultados"=>1,
    "mensaje"=>"Usuario autenticado",
    "token"=>sha1(uniqid(rand(),true))

   );
   $_SESSION["token"] = $resultado["token"];
   setcookie("token",$resultado["token"],time()+(60*60*24*31),"/");
   setcookie("nombre",$usuario[0]["nombre"],time()+(60*60*24*31),"/");
   setcookie("apellido",$usuario[0]["apellido"],time()+(60*60*24*31),"/");
   setcookie("correo",$usuario[0]["correo"],time()+(60*60*24*31),"/");
   setcookie("telefono",$usuario[0]["telefono"],time()+(60*60*24*31),"/");
   setcookie("id",$usuario[1],time()+(60*60*24*31),"/");
   echo json_encode($resultado);
}else{
    setcookie("token","",time()-1,"/");
    setcookie("nombre","",time()-1,"/");
    setcookie("apellido","",time()-1,"/");
    setcookie("correo","",time()-1,"/");
    setcookie("telefono","",time()-1,"/");
    setcookie("id","",time()-1,"/");
    echo '{"codigoResultados":0,"mensaje":"Usuario/contraseña incorrecta"}';
  }
   
  
        break;
       
    }
?>