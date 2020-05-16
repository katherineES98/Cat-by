<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
header("Content-Type: application/json");

//Instantiation and passing `true` enables exceptions


switch($_SERVER['REQUEST_METHOD']){
  case 'POST': //Guardar

    $correo=$_POST["prueba"];

   $mail = new PHPMailer();
   $mail->CharSet ='UTF-8';

   $body='
   <div>

   <h1>buenvenido a catby</h1>
   
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

    
    // Content
    header('location:../frontend/index.html');
  break;

  }





   


?>