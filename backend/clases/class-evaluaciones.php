<?php
class Evaluacion{
    private $comentario;
    private $calificacon;
    

    public function __construct(
        $comentario,
        $calificacon
        
       ){
            $this->comentario = $comentario;
            $this->calificacon = $calificacon;
              
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
     * Get the value of calificacon
     */ 
    public function getCalificacon()
    {
        return $this->calificacon;
    }

    /**
     * Set the value of calificacon
     *
     * @return  self
     */ 
    public function setCalificacon($calificacon)
    {
        $this->calificacon = $calificacon;

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
        "calificacon"=> $this->calificacon
       
         
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
        "calificacon"=> $this->calificacon
        
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