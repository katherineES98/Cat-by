<?php
class Promocion{
    private $image;
    private $nombreProducto;
    private $categoria;
    private $descripcion;
    private $precioAntes;
    private $precioAhora;
    private $descuento;
    private $fechaInicio;
    private $fechaLimite;
    private $ubicacionsucursal;
   

    public function __construct(
       $image,
        $nombreProducto,
        $categoria,
        $descripcion,
        $precioAntes,
        $precioAhora,
        $descuento,
        $fechaInicio,
        $fechaLimite,
        $ubicacionsucursal
       ){
            $this->image = $image;
            $this->nombreProducto = $nombreProducto;
            $this->categoria = $categoria;
            $this->descripcion = $descripcion;
            $this->precioAntes = $precioAntes;
            $this->precioAhora = $precioAhora;
            $this->descuento = $descuento;
            $this->fechaInicio = $fechaInicio;
            $this->fechaLimite = $fechaLimite;
            $this->ubicacionsucursal = $ubicacionsucursal;
            
           
          
    }

    
   

      
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set the value of image
     *
     *
     */ 
    public function setImage($image)
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
     * Get the value of categoria
     */ 
    public function getCategoria()
    {
        return $this->categoria;
    }

    /**
     * Set the value of categoria
     *
     * @return  self
     */ 
    public function setCategoria($categoria)
    {
        $this->categoria = $categoria;

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
     * Get the value of precioAntes
     */ 
    public function getPrecioAntes()
    {
        return $this->precioAntes;
    }

    /**
     * Set the value of precioAntes
     *
     * @return  self
     */ 
    public function setPrecioAntes($precioAntes)
    {
        $this->precioAntes = $precioAntes;

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
     * Get the value of descuento
     */ 
    public function getDescuento()
    {
        return $this->descuento;
    }

    /**
     * Set the value of descuento
     *
     * @return  self
     */ 
    public function setDescuento($descuento)
    {
        $this->descuento = $descuento;

        return $this;
    }

    /**
     * Get the value of fechaInicio
     */ 
    public function getFechaInicio()
    {
        return $this->fechaInicio;
    }

    /**
     * Set the value of fechaInicio
     *
     * @return  self
     */ 
    public function setFechaInicio($fechaInicio)
    {
        $this->fechaInicio = $fechaInicio;

        return $this;
    }

    /**
     * Get the value of fechaLimite
     */ 
    public function getFechaLimite()
    {
        return $this->fechaLimite;
    }

    /**
     * Set the value of fechaLimite
     *
     * @return  self
     */ 
    public function setFechaLimite($fechaLimite)
    {
        $this->fechaLimite = $fechaLimite;

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
    public static function obtenerPromociones($indice){
        $contenidoArchivoPromocion = file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivoPromocion, true);
        echo json_encode($empresas[$indice]);
    
    
    }
    //no se como es que funciona.......
    
    public static function obtenerPromocion($indice,$index){
        $contenidoArchivo = file_get_contents("../data/empresas.json");
        $empresas= json_decode($contenidoArchivo, true);
        echo json_encode($empresas[$indice]["promociones"][$index]);
    
    
    }

//guardar producto
public function guardarPromocion($indice){
    $contenidoArchivoProducto = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivoProducto, true);
    
    $empresas[$indice]["promociones"][]= array(
        "image"=> $this->image,
        "nombreProducto"=> $this->nombreProducto,
        "categoria"=> $this->categoria,
        "descripcion"=> $this->descripcion,
        "precioAntes"=> $this->precioAntes,
        "precioAhora"=> $this->precioAhora,
        "descuento"=> $this->descuento,
        "fechaInicio"=> $this->fechaInicio,
        "fechaLimite"=> $this->fechaLimite,
        "ubicacionsucursal"=> $this->ubicacionsucursal,
        "evaluacion"=>[]
          
    );

    $archivo = fopen("../data/empresas.json","w");
    fwrite($archivo, json_encode( $empresas));
    fclose($archivo);
    
    echo '{"codigoResultado":1,"mensaje":"Promocion guardada con exito"}';
    
    
    }

    public function actualizarPromocion($id,$index){

        $contenidoArchivo = file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivo, true);
        
        $promociones= array(
        "image"=> $this->image,
        "nombreProducto"=> $this->nombreProducto,
        "categoria"=> $this->categoria,
        "descripcion"=> $this->descripcion,
        "precioAntes"=> $this->precioAntes,
        "precioAhora"=> $this->precioAhora,
        "descuento"=> $this->descuento,
        "fechaInicio"=> $this->fechaInicio,
        "fechaLimite"=> $this->fechaLimite,
        "ubicacionsucursal"=> $this->ubicacionsucursal,
        "evaluacion"=>$empresas[$id]["promociones"][$index]["evaluacion"]

          
        );
        $empresas[$id]["promociones"][$index] =$promociones;
        $archivo = fopen('../data/empresas.json', 'w');
        fwrite($archivo, json_encode($empresas));
        fclose($archivo);
        
        }

        public static function eliminarPromocion($indice,$index){
            $contenidoArchivo = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivo, true);
            array_splice( $empresas[$indice]["promociones"], $index, 1);
            $archivo = fopen('../data/empresas.json', 'w');
            fwrite($archivo, json_encode($empresas));
             fclose($archivo);



        }










    

}

    ?>