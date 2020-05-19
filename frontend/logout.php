<?php
session_start();
session_destroy();
setcookie("token","",time()-1,"/");
setcookie("nombreEmpresa","",time()-1,"/");
setcookie("correo","",time()-1,"/");
setcookie("id","",time()-1,"/");
header("Location: index.html");


?>