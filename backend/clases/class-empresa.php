<?php
class Empresa{
private $nombreEmpresa;
private $descripcionEmpresa;
private $correo;
private $contrasena;
private $logo;
private $banner;
private $mision;
private $vision;
private $direccion;
private $pais;
private $ciudad;
private $telefono;
private $redesSociales;
private $URL;
private $latitud;
private $longitud;
private $pago;
private $propietario;
private $numeroTarjeta;
private $vencimiento;
private $cvv;
private $plan;


public function __construct(
    $nombreEmpresa,
    $descripcionEmpresa,
    $correo,
    $contrasena,
    $logo,
    $banner,
    $mision,
    $vision,
    $direccion,
    $pais,
    $ciudad,
    $telefono,
    $redesSociales,
    $URL,
    $latitud,
    $longitud,
    $pago,
    $propietario,
    $numeroTarjeta,
    $vencimiento,
    $cvv,
    $plan
   



){
    $this->nombreEmpresa = $nombreEmpresa;
    $this->descripcionEmpresa = $descripcionEmpresa;
    $this->correo = $correo;
    $this->contrasena = $contrasena;
    $this->logo = $logo;
    $this->banner = $banner;
    $this->mision = $mision;
    $this->vision = $vision;
    $this->direccion = $direccion;
    $this->pais = $pais;
    $this->ciudad =  $ciudad;
    $this->telefono = $telefono;
    $this->redesSociales =  $redesSociales;
    $this->URL =  $URL;
    $this->latitud = $latitud;
    $this->longitud = $longitud;
    $this->pago =  $pago;
    $this->propietario =  $propietario;
    $this->numeroTarjeta = $numeroTarjeta;
    $this->vencimiento = $vencimiento;
    $this->cvv = $cvv;
    $this->plan = $plan;
  
}




/**
 * Get the value of nombreEmpresa
 */ 
public function getNombreEmpresa()
{
return $this->nombreEmpresa;
}

/**
 * Set the value of nombreEmpresa
 *
 * @return  self
 */ 
public function setNombreEmpresa($nombreEmpresa)
{
$this->nombreEmpresa = $nombreEmpresa;

return $this;
}

/**
 * Get the value of descripcionEmpresa
 */ 
public function getDescripcionEmpresa()
{
return $this->descripcionEmpresa;
}

/**
 * Set the value of descripcionEmpresa
 *
 * @return  self
 */ 
public function setDescripcionEmpresa($descripcionEmpresa)
{
$this->descripcionEmpresa = $descripcionEmpresa;

return $this;
}

/**
 * Get the value of correo
 */ 
public function getCorreo()
{
return $this->correo;
}

/**
 * Set the value of correo
 *
 * @return  self
 */ 
public function setCorreo($correo)
{
$this->correo = $correo;

return $this;
}

/**
 * Get the value of contraseña
 */ 
public function getContrasena()
{
return $this->contrasena;
}

/**
 * Set the value of contraseña
 *
 * @return  self
 */ 
public function setContrasena($contrasena)
{
$this->contrasena = $contrasena;

return $this;
}

/**
 * Get the value of logo
 */ 
public function getLogo()
{
return $this->logo;
}

/**
 * Set the value of logo
 *
 * @return  self
 */ 
public function setLogo($logo)
{
$this->logo = $logo;

return $this;
}

/**
 * Get the value of banner
 */ 
public function getBanner()
{
return $this->banner;
}

/**
 * Set the value of banner
 *
 * @return  self
 */ 
public function setBanner($banner)
{
$this->banner = $banner;

return $this;
}

/**
 * Get the value of mision
 */ 
public function getMision()
{
return $this->mision;
}

/**
 * Set the value of mision
 *
 * @return  self
 */ 
public function setMision($mision)
{
$this->mision = $mision;

return $this;
}

/**
 * Get the value of vision
 */ 
public function getVision()
{
return $this->vision;
}

/**
 * Set the value of vision
 *
 * @return  self
 */ 
public function setVision($vision)
{
$this->vision = $vision;

return $this;
}

/**
 * Get the value of direccion
 */ 
public function getDireccion()
{
return $this->direccion;
}

/**
 * Set the value of direccion
 *
 * @return  self
 */ 
public function setDireccion($direccion)
{
$this->direccion = $direccion;

return $this;
}

/**
 * Get the value of pais
 */ 
public function getPais()
{
return $this->pais;
}

/**
 * Set the value of pais
 *
 * @return  self
 */ 
public function setPais($pais)
{
$this->pais = $pais;

return $this;
}

/**
 * Get the value of ciudad
 */ 
public function getCiudad()
{
return $this->ciudad;
}

/**
 * Set the value of ciudad
 *
 * @return  self
 */ 
public function setCiudad($ciudad)
{
$this->ciudad = $ciudad;

return $this;
}

/**
 * Get the value of telefono
 */ 
public function getTelefono()
{
return $this->telefono;
}

/**
 * Set the value of telefono
 *
 * @return  self
 */ 
public function setTelefono($telefono)
{
$this->telefono = $telefono;

return $this;
}

/**
 * Get the value of redesSociales
 */ 
public function getRedesSociales()
{
return $this->redesSociales;
}

/**
 * Set the value of redesSociales
 *
 * @return  self
 */ 
public function setRedesSociales($redesSociales)
{
$this->redesSociales = $redesSociales;

return $this;
}

/**
 * Get the value of latitud
 */ 
public function getLatitud()
{
return $this->latitud;
}

/**
 * Set the value of latitud
 *
 * @return  self
 */ 
public function setLatitud($latitud)
{
$this->latitud = $latitud;

return $this;
}

/**
 * Get the value of longitud
 */ 
public function getLongitud()
{
return $this->longitud;
}

/**
 * Set the value of longitud
 *
 * @return  self
 */ 
public function setLongitud($longitud)
{
$this->longitud = $longitud;

return $this;
}

/**
 * Get the value of pago
 */ 
public function getPago()
{
return $this->pago;
}

/**
 * Set the value of pago
 *
 * @return  self
 */ 
public function setPago($pago)
{
$this->pago = $pago;

return $this;
}

/**
 * Get the value of propietario
 */ 
public function getPropietario()
{
return $this->propietario;
}

/**
 * Set the value of propietario
 *
 * @return  self
 */ 
public function setPropietario($propietario)
{
$this->propietario = $propietario;

return $this;
}

/**
 * Get the value of numeroTarjeta
 */ 
public function getNumeroTarjeta()
{
return $this->numeroTarjeta;
}

/**
 * Set the value of numeroTarjeta
 *
 * @return  self
 */ 
public function setNumeroTarjeta($numeroTarjeta)
{
$this->numeroTarjeta = $numeroTarjeta;

return $this;
}

/**
 * Get the value of vencimiento
 */ 
public function getVencimiento()
{
return $this->vencimiento;
}

/**
 * Set the value of vencimiento
 *
 * @return  self
 */ 
public function setVencimiento($vencimiento)
{
$this->vencimiento = $vencimiento;

return $this;
}

/**
 * Get the value of cvv
 */ 
public function getCvv()
{
return $this->cvv;
}

/**
 * Set the value of cvv
 *
 * @return  self
 */ 
public function setCvv($cvv)
{
$this->cvv = $cvv;

return $this;
}

/**
 * Get the value of plan
 */ 
public function getPlan()
{
return $this->plan;
}

/**
 * Set the value of plan
 *
 * @return  self
 */ 
public function setPlan($plan)
{
$this->plan = $plan;

return $this;
}



/**
 * Get the value of URL
 */ 
public function getURL()
{
return $this->URL;
}

/**
 * Set the value of URL
 *
 * @return  self
 */ 
public function setURL($URL)
{
$this->URL = $URL;

return $this;
}

public  static function  obtenerEmpresas(){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    echo  $contenidoArchivo;

}
public  static function  obtenerEmpresa($indice){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivo, true);
    echo json_encode($empresas[$indice]);

}

public function guardarEmpresa(){
    $contenidoArchivoEmpresas = file_get_contents("../data/empresas.json");
    $empresas = json_decode( $contenidoArchivoEmpresas,true);
    $empresas[] = array(
             
        "nombreEmpresa"=> $this->nombreEmpresa,
        "descripcionEmpresa"=> $this->descripcionEmpresa,
        "correo"=> $this->correo,
        "contrasena"=>sha1( $this->contrasena),
        "logo"=> $this->logo,
        "banner"=> $this->banner,
        "mision"=> $this->mision,
        "vision"=> $this->vision,
        "direccion"=> $this->direccion,
        "pais"=> $this->pais,
        "ciudad"=> $this->ciudad,
        "telefono"=> $this->telefono,
        "redesSociales"=> $this->redesSociales,
        "URL"=> $this->URL,
        "latitud"=> $this->latitud,
        "longitud"=> $this->longitud,
        "pago"=> $this->pago,
        "propietario"=> $this->propietario,
        "numeroTarjeta"=> $this->numeroTarjeta,
        "vencimiento"=> $this->vencimiento,
        "cvv"=> $this->cvv,
        "plan"=> $this->plan,
        "sucursales"=>[],
        "productos"=>[],
        "promociones"=>[]
           
    );
  

    $archivo = fopen("../data/empresas.json","w");
    fwrite($archivo, json_encode( $empresas));
    fclose($archivo);

    echo '{"codigoResultado":1,"mensaje":"empresa guardada con exito"}';
}

public function actualizarEmpresa($indice){
    $contenidoArchivoEmpresa = file_get_contents('../data/empresas.json');
    $empresas = json_decode($contenidoArchivoEmpresa, true);
   
   
   $empresa  = array(
           
            "nombreEmpresa"=>$this->nombreEmpresa,
            "descripcionEmpresa"=>$this->descripcionEmpresa,
            "correo"=>$this->correo,
            "contrasena"=>sha1($this->contrasena),
            "logo"=>$this->logo,
            "banner"=>$this->banner,
            "mision"=>$this->mision,
            "vision"=>$this->vision,
            "direccion"=>$this->direccion,
            "pais"=>$this->pais,
            "ciudad"=>$this->ciudad,
            "telefono"=>$this->telefono,
            "redesSociales"=>$this->redesSociales,
            "URL"=>$this->URL,
            "latitud"=>$this->latitud,
            "longitud"=>$this->longitud,
            "pago"=>$this->pago,
            "propietario"=>$this->propietario,
            "numeroTarjeta"=>$this->numeroTarjeta,
            "vencimiento"=>$this->vencimiento,
            "cvv"=>$this->cvv,
            "plan"=>$this->plan,
            "sucursales"=> $empresas[$indice]["sucursales"],
            "productos"=>$empresas[$indice]["productos"],
            "promociones"=>$empresas[$indice]["promociones"]
    );
    $empresas[$indice] = $empresa;
     $archivo = fopen('../data/empresas.json', 'w');
     fwrite($archivo, json_encode($empresas));
     fclose($archivo);

}

public static function eliminarEmpresa($indice){
    $contenidoArchivoEmpresa = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivoEmpresa, true);
    array_splice( $empresas, $indice, 1);
    $archivo = fopen('../data/empresas.json', 'w');
    fwrite($archivo, json_encode($empresas));
     fclose($archivo);



    
}


public static function verificarEmpresa($correo , $contrasena){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivo, true);
    for ($i=0; $i < sizeof($empresas) ; $i++) { 
       if ($empresas[$i]["correo"]==$correo && $empresas[$i]["contrasena"]==sha1($contrasena)) {
         return array ($empresas[$i], $i);
       }
    }
return null;

}




}












?>