<?php
class PromocionesFavorita{
    private $imagen;
    private $nombre;
    private $descripcion;
    private $precio;
  
    public function __construct(
        $imagen,
        $nombre,
        $descripcion,
        $precio
        
     ){
      $this->imagen =  $imagen;
      $this->nombre =  $nombre;
      $this->descripcion =  $descripcion;
      $this->precio =$precio;
     
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
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

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
     * Get the value of precio
     */ 
    public function getPrecio()
    {
        return $this->precio;
    }

    /**
     * Set the value of precio
     *
     * @return  self
     */ 
    public function setPrecio($precio)
    {
        $this->precio = $precio;

        return $this;
    }
//CRUD
public static function obtenerPromocionFavorita($indice){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $usuarios = json_decode($contenidoArchivo, true);
    echo json_encode($usuarios[$indice]);


}


public static function  obtenerPromocionFavoritas($indice,$index){
    $contenidoArchivo = file_get_contents("../data/usuarios.jsons");
    $usuarios= json_decode($contenidoArchivo, true);
    echo json_encode($usuarios[$indice]["promocionesFavoritas"][$index]);


}


public function guardarPromocionFavoritas($indice){
    $contenidoArchivo = file_get_contents("../data/usuarios.json");
    $usuarios = json_decode($contenidoArchivo, true);
    
    $usuarios[$indice]["promocionesFavoritas"][]= array(
    
        "imagen"=> $this->imagen,
        "nombre"=> $this->nombre,
        "descripcion"=> $this->descripcion,
        "precio"=> $this->precio,
        "sucursales"=>[]

    
         
    );
    
    $archivo = fopen("../data/usuarios.json","w");
    fwrite($archivo, json_encode( $usuarios));
    fclose($archivo);
    
    echo '{"codigoResultado":1,"mensaje":"Promociones Favorita guardada con exito"}';
    
    
    }
    
///mirar que el arreglo me da null
    public function actualizarPromocionFavorita($id,$index){

        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        
        $promociones= array(
        "imagen"=> $this->imagen,
        "nombre"=> $this->nombre,
        "descripcion"=> $this->descripcion,
        "precio"=> $this->precio,
        "sucursales"=>$usuarios[$id]["promocionesFavoritas"][$index]["sucursales"]
        
        );
        $usuarios[$id]["promocionesFavoritas"][$index] = $promociones;
        $archivo = fopen('../data/usuarios.json', 'w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);
        
        }


        public static function eliminarPromocionFavorita($indice,$index){
            $contenidoArchivo = file_get_contents("../data/usuarios.json");
            $usuarios = json_decode($contenidoArchivo, true);
            array_splice( $usuarios[$indice]["promocionesFavoritas"], $index, 1);
            $archivo = fopen('../data/usuarios.json', 'w');
            fwrite($archivo, json_encode($usuarios));
             fclose($archivo);



        }









}







?>