<?php
class Evaluacion{
    private $comentario;
    private $calificacion;
    private $nombre;
    private $apellido;

    
    

    public function __construct(
        $comentario,
        $calificacion,
        $nombre,
        $apellido
       ){
            $this->comentario = $comentario;
            $this->calificacion = $calificacion;
            $this->nombre = $nombre;
            $this->apellido = $apellido;
              
    }

    

    /**
     * Get the value of comentario
     */ 
    public function getComentario()
    {
        return $this->comentario;
    }

    /**
     * Set the value of comentario
     *
     * @return  self
     */ 
    public function setComentario($comentario)
    {
        $this->comentario = $comentario;

        return $this;
    }

   
    /**
     * Get the value of calificacion
     */ 
    public function getCalificacion()
    {
        return $this->calificacion;
    }

    /**
     * Set the value of calificacion
     *
     * @return  self
     */ 
    public function setCalificacion($calificacion)
    {
        $this->calificacion = $calificacion;

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
    

//CRUD hacer mejor el crud
public static function obtenerEvaluaciones($indice,$index){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivo, true);
    echo json_encode(  $empresas[$indice]["promociones"][$index]);


   

}


public static function  obtenerEvaluacion($indice,$index,$id){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    $empresas= json_decode($contenidoArchivo, true);
    echo json_encode( $empresas[$indice]["promociones"][$index]["evaluacion"][$id]);


}


public function guardarEvaluacion($indice,$index){
    $contenidoArchivo = file_get_contents("../data/empresas.json");
    $empresas = json_decode($contenidoArchivo, true);
    
    $empresas[$indice]["promociones"][$index]["evaluacion"][]= array(
    
        "comentario"=> $this->comentario,
        "calificacion"=> $this->calificacion,
        "nombre"=> $this->nombre,
        "apellido"=> $this->apellido,
       
         
    );
    
    $archivo = fopen("../data/empresas.json","w");
    fwrite($archivo, json_encode( $empresas));
    fclose($archivo);
    
    echo '{"codigoResultado":1,"mensaje":"Evaluacion guardada con exito"}';
    
    
    }
    

    public function actualizarEvaluacion($id,$index,$indice){

        $contenidoArchivo = file_get_contents("../data/empresas.json");
        $empresas = json_decode($contenidoArchivo, true);
        
        $evaluaciones= array(
           
        "comentario"=> $this->comentario,
        "calificacion"=> $this->calificacion,
        "nombre"=> $this->nombre,
        "apellido"=> $this->apellido
        
        );
        $empresas[$id]["promociones"][$index]["evaluacion"][$indice] = $evaluaciones;
        $archivo = fopen('../data/empresas.json', 'w');
        fwrite($archivo, json_encode($empresas));
        fclose($archivo);
        
        }


        public static function eliminarEvaluacion($indice,$index,$id){
            $contenidoArchivo = file_get_contents("../data/empresas.json");
            $empresas = json_decode($contenidoArchivo, true);
            array_splice($empresas[$indice]["promociones"][$index]["evaluacion"], $id, 1);
            $archivo = fopen('../data/empresas.json', 'w');
            fwrite($archivo, json_encode($empresas));
             fclose($archivo);



        }








   
}








?>