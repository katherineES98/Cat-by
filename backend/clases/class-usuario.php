<?php

class Usuario{
    private $nombre;
    private $apellido;
    private $genero;
    private $contrasena;
    private $correo;
    private $direccion;
    private $telefono;
    //private $empresaFavoritas;
    
    public function __construct($nombre,$apellido,$genero,$contrasena,$correo,$direccion,$telefono){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->genero = $genero;
        $this->contrasena = $contrasena;
        $this->correo = $correo;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
        //$this->empresaFavoritas = $empresaFavoritas;
      
      
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
     * Get the value of apellido
     */ 
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * Set the value of apellido
     *
     * @return  self
     */ 
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;

        return $this;
    }

    /**
     * Get the value of genero
     */ 
    public function getGenero()
    {
        return $this->genero;
    }

    /**
     * Set the value of genero
     *
     * @return  self
     */ 
    public function setGenero($genero)
    {
        $this->genero = $genero;

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

    public  static function  obtenerUsuarios(){
        $contenidoArchivoUsuario = file_get_contents("../data/usuarios.json");
        echo $contenidoArchivoUsuario;

}
public  static function  obtenerUsuario($indice){
        $contenidoArchivoUsuario = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivoUsuario, true);
        echo json_encode($usuarios[$indice]);

}

    public function guardarUsuario(){
        $contenidoArchivo = file_get_contents('../data/usuarios.json');
        $usuarios = json_decode($contenidoArchivo,true);
        $usuarios[] = array(
                "nombre"=> $this->nombre,
                "apellido"=> $this->apellido,
                "genero"=> $this->genero,
                "contrasena"=> $this->contrasena,
                "correo"=> $this->correo,
                "direccion"=> $this->direccion,
                "telefono"=> $this->telefono,

                "empresaFavoritas"=>[],
                "carrito"=>[],
                "promocionesFavoritas"=>[]

        );


        $archivo = fopen('../data/usuarios.json','w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);

        echo '{"codigoResultado":1,"mensaje":"Usuario guardado con exito"}';

}

public function actualizarUsuario($indice){
    $contenidoArchivoUsuario = file_get_contents('../data/usuarios.json');
    $usuarios = json_decode( $contenidoArchivoUsuario, true);
   
   // $usuario = $usuarios[$indice];
   $usuario  = array(
    "nombre"=> $this->nombre,
    "apellido"=> $this->apellido,
    "genero"=> $this->genero,
    "contrasena"=> $this->contrasena,
    "correo"=> $this->correo,
    "direccion"=> $this->direccion,
    "telefono"=> $this->telefono,
    "empresaFavoritas"=> $usuarios[$indice]["empresaFavoritas"],
    "carrito"=> $usuarios[$indice]["carrito"],
    "promocionesFavoritas"=> $usuarios[$indice]["promocionesFavoritas"]
    );

    //sustituimos la informacion en el indice por la nueva 
    $usuarios[$indice] = $usuario;
     $archivo = fopen('../data/usuarios.json', 'w');
     fwrite($archivo, json_encode($usuarios));
     fclose($archivo);

}


public static function eliminarUsuario($indice){
    $contenidoArchivoUsuario = file_get_contents("../data/usuarios.json");
    $usuarios = json_decode($contenidoArchivoUsuario, true);
    array_splice( $usuarios, $indice, 1);
    $archivo = fopen('../data/usuarios.json', 'w');
    fwrite($archivo, json_encode($usuarios));
     fclose($archivo);



    
}












   
}













?>