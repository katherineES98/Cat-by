<?php
class PromocionesFavorita{
    private $image;
    private $nombreProducto;
    private $descripcion;
    private $precioAhora;
    private $ubicacionsucursal;

    public function __construct(
        $image,
        $nombreProducto,
        $descripcion,
        $precioAhora,
        $ubicacionsucursal
     ){
      $this->image =  $image;
      $this->nombreProducto =  $nombreProducto;
      $this->descripcion =  $descripcion;
      $this->precioAhora =$precioAhora;
      $this->ubicacionsucursal =$ubicacionsucursal;
     
         }
     
 /**
     * Get the value of imagen
     */ 
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set the value of imagen
     *
     * @return  self
     */ 
    public function setImagen($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get the value of nombreProducto
     */ 
    public function getNombreProducto()
    {
        return $this->nombreProducto;
    }

    /**
     * Set the value of nombreProducto
     *
     * @return  self
     */ 
    public function setNombreProducto($nombreProducto)
    {
        $this->nombreProducto = $nombreProducto;

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
     * Get the value of precioAhora
     */ 
    public function getPrecioAhora()
    {
        return $this->precioAhora;
    }

    /**
     * Set the value of precioAhora
     *
     * @return  self
     */ 
    public function setPrecioAhora($precioAhora)
    {
        $this->precioAhora = $precioAhora;

        return $this;
    }

    /**
     * Get the value of ubicacionsucursal
     */ 
    public function getUbicacionsucursal()
    {
        return $this->ubicacionsucursal;
    }

    /**
     * Set the value of ubicacionsucursal
     *
     * @return  self
     */ 
    public function setUbicacionsucursal($ubicacionsucursal)
    {
        $this->ubicacionsucursal = $ubicacionsucursal;

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
    
        "image"=> $this->image,
        "nombreProducto"=> $this->nombreProducto,
        "descripcion"=> $this->descripcion,
        "precioAhora"=> $this->precioAhora,
        "ubicacionsucursal"=> $this->ubicacionsucursal,
        

        

    
         
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
        "image"=> $this->image,
        "nombreProducto"=> $this->nombreProducto,
        "descripcion"=> $this->descripcion,
        "precioAhora"=> $this->precioAhora,
        "ubicacionsucursal"=> $this->ubicacionsucursal,
       

       
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