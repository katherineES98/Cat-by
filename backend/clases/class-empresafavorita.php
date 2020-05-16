<?php
class EmpresaF{
private $imagen;
private $nombreEmpresa;
private $descripcion;
private $ubicacion;

public function __construct(
   $imagen,
   $nombreEmpresa,
   $descripcion,
   $ubicacion
   
){
 $this->imagen =  $imagen;
 $this->nombreEmpresa =  $nombreEmpresa;
 $this->descripcion =  $descripcion;
 $this->ubicacion =$ubicacion;

    }




/**
 * Get the value of imagen
 */ 
public function getImagen()
{
return $this->imagen;
}

/**
 * Set the value of imagen
 *
 * @return  self
 */ 
public function setImagen($imagen)
{
$this->imagen = $imagen;

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
 * Get the value of descripcion
 */ 
public function getDescripcion()
{
return $this->descripcion;
}

/**
 * Set the value of descripcion
 *
 * @return  self
 */ 
public function setDescripcion($descripcion)
{
$this->descripcion = $descripcion;

return $this;
}

/**
 * Get the value of ubicacion
 */ 
public function getUbicacion()
{
return $this->ubicacion;
}

/**
 * Set the value of ubicacion
 *
 * @return  self
 */ 
public function setUbicacion($ubicacion)
{
$this->ubicacion = $ubicacion;

return $this;
}

//CRUD
public static function obtenerEmpresaFavorita($indice){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $empresaf = json_decode($contenidoArchivo, true);
    echo json_encode($empresaf[$indice]);


}


public static function  obtenerEmpresaFavoritas($indice,$index){
    $contenidoArchivo = file_get_contents("../data/usuarios.jsons");
    $usuarios= json_decode($contenidoArchivo, true);
    echo json_encode($usuarios[$indice]["empresaFavoritas"][$index]);


}


public function guardarEmpresaFavorita($indice){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $usuarios = json_decode($contenidoArchivo, true);
    
    $usuarios[$indice]["empresaFavoritas"][]= array(
    
        "imagen"=> $this->imagen,
        "nombreEmpresa"=> $this->nombreEmpresa,
        "descripcion"=> $this->descripcion,
        "ubicacion"=> $this->ubicacion
         
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
            "imagen"=> $this->imagen,
            "nombreEmpresa"=> $this->nombreEmpresa,
            "descripcion"=> $this->descripcion,
            "ubicacion"=> $this->ubicacion
        
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