<?php
class Sucursal{
    private $nombre;
    private $correo;
    private $telefono;
    private $pais;
    private $ciudad;
    private $direccion;
    private $latitud;
    private $longitud;


    public function __construct(
        $nombre,
        $correo,
        $telefono,
        $pais,
        $ciudad,
        $direccion,
        $latitud,
        $longitud
 ){
     $this->nombre = $nombre;
     $this->correo = $correo;
     $this->telefono = $telefono;
     $this->pais = $pais;
     $this->ciudad = $ciudad;
     $this->direccion = $direccion;
     $this->latitud = $latitud;
     $this->longitud = $longitud;
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
 
 public static function obtenerSucursale($indice,$index){
     $contenidoArchivoSucursal = file_get_contents("../data/usuarios.json");
     $usuarios = json_decode($contenidoArchivoSucursal, true);
     echo json_encode($usuarios[$indice]["promocionesFavoritas"][$index]);
 
 
 }
 
 //esta malo no obtiene nada mas las sucursales
 
 public static function obtenerSucursales($indice,$index,$id){
     $contenidoArchivo = file_get_contents("../data/usuarios.json");
     $usuarios= json_decode($contenidoArchivo, true);
     echo json_encode($usuarios[$indice]["promocionesFavoritas"][$index]["sucursales"][$id]);
 
 
 }
 
 
 
 
 public function guardarSucursal($indice,$index){
 $contenidoArchivo = file_get_contents("../data/usuarios.json");
 $usuarios = json_decode($contenidoArchivo, true);
 
 $usuarios[$indice]["promocionesFavoritas"][$index]["sucursales"][]= array(
 
     "nombre"=> $this->nombre,
     "correo"=> $this->correo,
     "telefono"=> $this->telefono,
     "pais"=> $this->pais,
     "ciudad"=> $this->ciudad,
     "direccion"=> $this->direccion,
     "latitud"=> $this->latitud,
     "longitud"=> $this->longitud
   
     
 );
 
 $archivo = fopen("../data/usuarios.json","w");
 fwrite($archivo, json_encode( $usuarios));
 fclose($archivo);
 
 echo '{"codigoResultado":1,"mensaje":"sucursal guardada con exito"}';
 
 
 }
 
 
 public function actualizarSucursal($id,$index,$indice){
 
 $contenidoArchivo = file_get_contents("../data/usuarios.json");
 $usuarios = json_decode($contenidoArchivo, true);
 
 $sucursal= array(
     "nombre"=> $this->nombre,
     "correo"=> $this->correo,
     "telefono"=> $this->telefono,
     "pais"=> $this->pais,
     "ciudad"=> $this->ciudad,
     "direccion"=> $this->direccion,
     "latitud"=> $this->latitud,
     "longitud"=> $this->longitud
    
 
 );
 $usuarios[$id]["promocionesFavoritas"][$index]["sucursales"][$indice] =$sucursal;
 $archivo = fopen('../data/usuarios.json', 'w');
 fwrite($archivo, json_encode($usuarios));
 fclose($archivo);
 
 }
 
 public static function eliminarSucursal($indice,$index,$id){
     $contenidoArchivoEmpresa = file_get_contents("../data/usuarios.json");
     $usuarios = json_decode($contenidoArchivoEmpresa, true);
     array_splice( $usuarios[$indice]["promocionesFavoritas"][$index]["sucursales"], $id, 1);
     $archivo = fopen('../data/usuarios.json', 'w');
     fwrite($archivo, json_encode($usuarios));
      fclose($archivo);
 
 
 
     
 
 
 
 
 
 
 
 
 
     }








}












?>