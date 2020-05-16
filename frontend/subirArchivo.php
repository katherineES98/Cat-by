<?php

require '../backend/PHPMailer/src/PHPMailer.php';
require '../backend/PHPMailer/src/SMTP.php';
header("Content-Type: application/json");
//include_once("clases/class-usuario.php");


$num_archivos = count($_FILES['archivo']['name']);

$correo=$_POST["user"];


for ($i=0; $i < $num_archivos; $i++) { 

     if (!empty($_FILES['archivo']['name'][$i])) {

         $ruta_nueva = "img/empresas/".$_FILES['archivo']['name'][$i];

         if (file_exists($ruta_nueva)) {

             echo "el archivo ".$_FILES['archivo']['name'][$i]."ya se encuentra en el servidor<br>";
        
         } else {
            $ruta_temporal = $_FILES['archivo']['tmp_name'][$i];
            move_uploaded_file($ruta_temporal,$ruta_nueva);

            echo "el archivo ".$_FILES['archivo']['name'][$i]."se subio de manera exitosa<br>";
         }
         
        
     } 
     


}



   $mail = new PHPMailer();
   $mail->CharSet ='UTF-8';

   $body='
   <div>

   <h1>bienvenido a catby</h1>
   
   </div>

   ';
   
    //Server settings
 
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';   
    $mail->SMTPSecure = 'tls'; 
    $mail->Port       = 587;   
    $mail->SMTPDebug   = 1;                 // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'catby879@gmail.com';                     // SMTP username
    $mail->Password   = 'catby1998'; 
    $mail->setFrom('catby879@gmail.com', 'CAT-BY'); 
    $mail->addReplyTo('no-reply@mycomp.com', 'no-reply'); 
    $mail->Subject = 'Asunto muy Importante';
    $mail->MsgHTML($body);                            // SMTP password
          // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
   
                         // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
   
   
    $mail->addAddress($correo, 'Gio');     // Add a recipient
    $mail->send();

    


header("location:index.html");


            
       
   
   
       

?>