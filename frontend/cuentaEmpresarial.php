<?php
session_start();
if(!isset($_SESSION["token"]))
header("Location: 401.html");

if(!isset($_COOKIE["token"]))
header("Location: 401.html");

if($_SESSION["token"] != $_COOKIE["token"] )
header("Location: 401.html");

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cuenta empresarial</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/CuentaEmpre.css">
    <link rel="stylesheet" href="css/all.css">
</head>
<body>
    
    <header>
        <nav class="navbar navbar-expand-lg " >
            <a class="navbar-brand" href="#"><img src="img/cate2.png"/></a>
            <button class="navbar-toggler navbar-toggler-right " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon bg-light"></span>
            </button>
   
            <div class="collapse navbar-collapse"  style=" flex-direction: row-reverse;" id="navbarSupportedContent">
              
                 <div class="navbar-nav " >
                     <center>
                    <a class="nav-link colorEnlace" data-toggle="modal" data-target="#modal" href="#"><i class="fa fa-power-off" ></i> Cerrar Sesion</a>
                </center>
                    <center>
                    <a class="imagen" href=""><img src="img/face1.jpg" alt=""></a>
                </center>
                </div>
              
            </div>
          </nav>
        <section class="texto-header">
            <h1>Cuenta Empresarial </h1>
            <h2> Bienvenido <?php echo $_COOKIE["nombreEmpresa"] ?></h2>
        </section>
        <div class="wave" style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #ffff;"></path>
            </svg></div>

    </header>
    <main>
        <div class="container-fluid mt-3" >
              <div class="row">
                  <div class="col-md-4 m-n1">
                      <!--card-->
                        <div class="row">
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card " style="height: 150px;box-shadow: 2px 2px 5px #1ea7d4;">
                                <div class="card-body ">
                                    <div class="iconos">
                                        <a href="actualizarEmpresa.html?key=formEmpresa"><i class="fas fa-user-edit fa-3x" style="display: flex; align-items: center;justify-content: center; color: black;" ></i></a>
                                    <h3>Editar Perfil</h3>
                                </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card " style="height:150px;box-shadow: 2px 2px 5px #1ea7d4;">
                                <div class="card-body ">
                                    <div class="iconos">
                                        <a href="RegistroSucursal.html"><i class="fas fa-building  fa-3x" style="display: flex; align-items: center;justify-content: center; color: black;"></i></a>
                                        <h3>Registro de Sucursal</h3>
                                    </div>

                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card " style="height:150px;box-shadow: 2px 2px 5px #1ea7d4;">
                                <div class="card-body ">
                                    <div class="iconos">
                                        <a href="RegistroProducto.html"><i class="fas fa-thumbs-up fa-3x"  style="display: flex; align-items: center;justify-content: center; color: black;"></i></a>
                                        <h3>Registro de Productos</h3>
                                    </div>

                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card " style="height:150px;box-shadow: 2px 2px 5px #1ea7d4;">
                                <div class="card-body ">
                                    <div class="iconos">
                                        <a href="RegistroPromocion.html?key=producto"> <i class="fas fa-store fa-3x" style="display: flex; align-items: center;justify-content: center; color: black;"></i></a>
                                        <h3>Registro de Promociones</h3>
                                    </div>

                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card " style="height:150px;box-shadow: 2px 2px 5px #1ea7d4;">
                                <div class="card-body ">
                                    <div class="iconos">
                                        <a href="FichadeImpresion.html"><i class="fas fa-star fa-3x" style="display: flex; align-items: center;justify-content: center; color: black;"></i></a>
                                        <h3>Ficha de Impresion</h3>
                                    </div>

                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-10 col-md-10 mx-auto mb-4">
                            <div class="card " style="height:150px;box-shadow: 2px 2px 5px #1ea7d4;">
                                <div class="card-body ">
                                    <div class="iconos">
                                        <i class="fas fa-cash-register fa-3x" style="display: flex; align-items: center;justify-content: center;color: black;"></i>
                                    </div>
                                       <h3>Proximamente</h3>
                                </div>
                              </div>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-8 ">
                        <div class="card" >
                            <h5 class="card-header " style="text-align: center;">
                               Control De Ventas
                            </h5>
                            <div class="card-body">
                                
                                <div class="alert alert-primary mt-5" role="alert">
                                      <h4 >Ventas por Dia</h4>
                                    <canvas id="myChart"></canvas>
                                  </div>

                                  <div class="alert alert-secondary mt-5 " role="alert">
                                      <h4>Seguidores por Mes</h4>
                                    <canvas id="grafico2"></canvas>
                                  </div>
                            
                            </div>
                          </div>
                    </div>  
                    
              
        </div>
    </main>
   <!--modal-->
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">¿Listo para salir?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
                </div>
                <div class="modal-body">
                    Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                    <a class="btn btn-primary" href="logout.php">Cerrar Sesion</a>
                </div>
            </div>
        </div>
    </div>




    <script src="js/axios.min.js"></script>
  <script src="js/script.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery.slim.js"></script>
    <script src="js/bootstrap.min.js"></script> 
      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/chart.js"></script>
    <script src="js/grafico.js"></script>
    
</body>
</html>