<?php
class Carrito{
    private $imagen;
    private $nombreproducto;
    private $precio;
    private $cantidad;
    private $descuento;
    private $nombrePropietario;
    private $numeroTarjeta;
    private $vencimiento;
    private $CVV;
    private $total;
    private $formaPago;
    private $envio;

    public function __construct(
        $imagen,
        $nombreproducto,
        $precio,
        $cantidad,
        $descuento,
        $nombrePropietario,
        $numeroTarjeta,
        $vencimiento,
        $CVV,
        $total,
        $formaPago,
        $envio
       ){
            $this->imagen = $imagen;
            $this->nombreproducto = $nombreproducto;
            $this->precio = $precio;
            $this->cantidad = $cantidad;
            $this->descuento = $descuento;
            $this->nombrePropietario = $nombrePropietario;
            $this->numeroTarjeta = $numeroTarjeta;
            $this->vencimiento = $vencimiento;
            $this->CVV = $CVV;
            $this->total = $total;
            $this->formaPago = $formaPago;
            $this->envio = $envio;

           
          
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
     * Get the value of nombreproducto
     */ 
    public function getNombreproducto()
    {
        return $this->nombreproducto;
    }

    /**
     * Set the value of nombreproducto
     *
     * @return  self
     */ 
    public function setNombreproducto($nombreproducto)
    {
        $this->nombreproducto = $nombreproducto;

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
     * Get the value of nombrePropietario
     */ 
    public function getNombrePropietario()
    {
        return $this->nombrePropietario;
    }

    /**
     * Set the value of nombrePropietario
     *
     * @return  self
     */ 
    public function setNombrePropietario($nombrePropietario)
    {
        $this->nombrePropietario = $nombrePropietario;

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
     * Get the value of CVV
     */ 
    public function getCVV()
    {
        return $this->CVV;
    }

    /**
     * Set the value of CVV
     *
     * @return  self
     */ 
    public function setCVV($CVV)
    {
        $this->CVV = $CVV;

        return $this;
    }

    /**
     * Get the value of total
     */ 
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Set the value of total
     *
     * @return  self
     */ 
    public function setTotal($total)
    {
        $this->total = $total;

        return $this;
    }

    /**
     * Get the value of formaPago
     */ 
    public function getFormaPago()
    {
        return $this->formaPago;
    }

    /**
     * Set the value of formaPago
     *
     * @return  self
     */ 
    public function setFormaPago($formaPago)
    {
        $this->formaPago = $formaPago;

        return $this;
    }

    /**
     * Get the value of envio
     */ 
    public function getEnvio()
    {
        return $this->envio;
    }

    /**
     * Set the value of envio
     *
     * @return  self
     */ 
    public function setEnvio($envio)
    {
        $this->envio = $envio;

        return $this;
    }

    public static function obtenerCarritos($indice){
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        echo json_encode($usuarios[$indice]);
    
    
    }
    
    
    public static function  obtenerCarrito($indice,$index){
        $contenidoArchivo = file_get_contents("../data/usuarios.jsons");
        $usuarios= json_decode($contenidoArchivo, true);
        echo json_encode($usuarios[$indice]["carrito"][$index]);
    
    
    }
    
    
    public function guardarCarrito($indice){
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        
        $usuarios[$indice]["carrito"][]= array(
        
            "imagen"=> $this->imagen,
            "nombreproducto"=> $this->nombreproducto,
            "precio"=> $this->precio,
            "cantidad"=> $this->cantidad,
            "descuento"=> $this->descuento,
            "nombrePropietario"=> $this->nombrePropietario,
            "numeroTarjeta"=> $this->numeroTarjeta,
            "vencimiento"=> $this->vencimiento,
            "CVV"=> $this->CVV,
            "total"=> $this->total,
            "formaPago"=> $this->formaPago,
            "envio"=> $this->envio
       
             
        );
        
        $archivo = fopen("../data/usuarios.json","w");
        fwrite($archivo, json_encode( $usuarios));
        fclose($archivo);
        
        echo '{"codigoResultado":1,"mensaje":"Carrito guardada con exito"}';
        
        
        }
        
    
        public function actualizarCarrito($id,$index){
    
            $contenidoArchivo = file_get_contents("../data/usuarios.json");
            $usuarios = json_decode($contenidoArchivo, true);
            
            $carritoC= array(
                "imagen"=> $this->imagen,
                "nombreproducto"=> $this->nombreproducto,
                "precio"=> $this->precio,
                "cantidad"=> $this->cantidad,
                "descuento"=> $this->descuento,
                "nombrePropietario"=> $this->nombrePropietario,
                "numeroTarjeta"=> $this->numeroTarjeta,
                "vencimiento"=> $this->vencimiento,
                "CVV"=> $this->CVV,
                "total"=> $this->total,
                "formaPago"=> $this->formaPago,
                "envio"=> $this->envio
           
            
            );
            $usuarios[$id]["carrito"][$index] = $carritoC;
            $archivo = fopen('../data/usuarios.json', 'w');
            fwrite($archivo, json_encode($usuarios));
            fclose($archivo);
            
            }
    
    
            public static function eliminarCarrito($indice,$index){
                $contenidoArchivo = file_get_contents("../data/usuarios.json");
                $usuarios = json_decode($contenidoArchivo, true);
                array_splice( $usuarios[$indice]["carrito"], $index, 1);
                $archivo = fopen('../data/usuarios.json', 'w');
                fwrite($archivo, json_encode($usuarios));
                 fclose($archivo);
    
    
    
            }
    
    







}








?>