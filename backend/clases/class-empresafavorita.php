<?php
class EmpresaF{
private $logo;
private $nombreEmpresa;
private $descripcionEmpresa;
private $direccion;



public function __construct(
   $logo,
   $nombreEmpresa,
   $descripcionEmpresa,
   $direccion
   
){
 $this->logo =  $logo;
 $this->nombreEmpresa =  $nombreEmpresa;
 $this->descripcionEmpresa =  $descripcionEmpresa;
 $this->direccion =$direccion;

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



//CRUD
public static function obtenerEmpresaFavorita($indice){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $empresaf = json_decode($contenidoArchivo, true);
    echo json_encode($empresaf[$indice]);


}


/*public static function  obtenerEmpresaFavoritas($indice,$index){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $usuarios= json_decode($contenidoArchivo, true);
    echo json_encode($usuarios[$indice]["empresaFavoritas"][$index]);


}
*/

public function guardarEmpresaFavorita($indice){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $usuarios = json_decode($contenidoArchivo, true);
    
    $usuarios[$indice]["empresaFavoritas"][]= array(
    
        "logo"=> $this->logo,
        "nombreEmpresa"=> $this->nombreEmpresa,
        "descripcionEmpresa"=> $this->descripcionEmpresa,
        "direccion"=> $this->direccion

    );
    
    $archivo = fopen("../data/usuarios.json","w");
    fwrite($archivo, json_encode( $usuarios));
    fclose($archivo);
    
    echo '{"codigoResultado":1,"mensaje":"Empresa Favorita guardada con exito"}';
    
    
    }
    

    public function actualizarEmpresaFavorita($id,$index){

        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        
        $empresaf= array(
            "logo"=> $this->logo,
            "nombreEmpresa"=> $this->nombreEmpresa,
            "descripcionEmpresa"=> $this->descripcionEmpresa,
            "direccion"=> $this->direccion
    

        );
        $usuarios[$id]["empresaFavoritas"][$index] = $empresaf;
        $archivo = fopen('../data/usuarios.json', 'w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);
        
        }


        public static function eliminarEmpresaFavorita($indice,$index){
            $contenidoArchivo = file_get_contents("../data/usuarios.json");
            $usuarios = json_decode($contenidoArchivo, true);
            array_splice( $usuarios[$indice]["empresaFavoritas"], $index, 1);
            $archivo = fopen('../data/usuarios.json', 'w');
            fwrite($archivo, json_encode($usuarios));
             fclose($archivo);



        }







}









?>