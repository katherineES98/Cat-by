<?php
class Producto{
    private $image;
    private $nombreProducto;
    private $precio;
    private $cantidad;
    private $categoria;
    private $descripcion;
    private $direccion;
    
    
    public function __construct(
    $image,
    $nombreProducto,
    $precio,
    $cantidad,
    $categoria,
    $descripcion,
    $direccion
   ){
        $this->image = $image;
        $this->nombreProducto = $nombreProducto;
        $this->precio = $precio;
        $this->cantidad = $cantidad;
        $this->categoria = $categoria;
        $this->descripcion = $descripcion;
        $this->direccion = $direccion;
       
      
}



    /**
     * Get the value of image
     */ 
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set the value of image
     *
     * @return  self
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

    /**
     * Get the value of cantidad
     */ 
    public function getCantidad()
    {
        return $this->cantidad;
    }

    /**
     * Set the value of cantidad
     *
     * @return  self
     */ 
    public function setCantidad($cantidad)
    {
        $this->cantidad = $cantidad;

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
public static function obtenerProducto($indice){
    $contenidoArchivoProducto = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivoProducto, true);
    echo json_encode($empresas[$indice]);


}
//no se como es que funciona.......

public static function obtenerProductos($indice,$index){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    $empresas= json_decode($contenidoArchivo, true);
    echo json_encode($empresas[$indice]["productos"][$index]);


}

//guardar producto
public function guardarProducto($indice){
    $contenidoArchivoProducto = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivoProducto, true);
    
    $empresas[$indice]["productos"][]= array(
    
        "image"=> $this->image,
        "nombreProducto"=> $this->nombreProducto,
        "precio"=> $this->precio,
        "cantidad"=> $this->cantidad,
        "categoria"=> $this->categoria,
        "descripcion"=> $this->descripcion,
        "direccion"=> $this->direccion
        
        
    );

    $archivo = fopen("../data/empresas.json","w");
    fwrite($archivo, json_encode( $empresas));
    fclose($archivo);
    
    echo '{"codigoResultado":1,"mensaje":"Producto guardada con exito"}';
    
    
    }

    public function actualizarProducto($id,$index){

        $contenidoArchivo = file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivo, true);
        
        $producto= array(
            "image"=> $this->image,
            "nombreProducto"=> $this->nombreProducto,
            "precio"=> $this->precio,
            "cantidad"=> $this->cantidad,
            "categoria"=> $this->categoria,
            "descripcion"=> $this->descripcion,
            "direccion"=> $this->direccion
            


          
        );
        $empresas[$id]["productos"][$index] =$producto;
        $archivo = fopen('../data/empresas.json', 'w');
        fwrite($archivo, json_encode($empresas));
        fclose($archivo);
        
        }

        public static function eliminarProducto($indice,$index){
            $contenidoArchivo = file_get_contents('../data/empresas.json');
            $empresas = json_decode($contenidoArchivo, true);
            array_splice( $empresas[$indice]["productos"], $index, 1);
            $archivo = fopen('../data/empresas.json', 'w');
            fwrite($archivo, json_encode($empresas));
             fclose($archivo);



        }










}









?>