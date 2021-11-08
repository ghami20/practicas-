<!DOCTYPE html>
<html>
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>       

<link href="styles.css" rel="stylesheet">

<script src="script.js"
  defer></script>

<title>Estudiantes</title>
</head>
<body>
    <div class="container">
          <div class="container-form">
            <form class= "form form-primary" action="alta_estudiante.php" method="post">
              <div class="mb-3">
                Nombre: <input type="text" name="nombre" pattern="[a-z]" Required><br>
              </div>
              <div class="mb-3">
                Apellido: <input type="text" name="apellido" pattern="[a-z]" Required><br>
              </div>
              <div class="mb-3">
              Dni: <input type="text" name="dni" pattern="{1,9}" min = "7" max = "8" Required><br>
              </div>
              <div class="mb-3">
              Carrera: <input type="text" name="carrera" pattern="[a-z]" Required><br>
              </div>
              <button name="BtnEnviar" type="sumbit" class="btn btn-primary">enviar</button>
            </form>
          </div>
    </div>
<?php
if(isset($_POST["BtnEnviar"])){
    if($_POST["nombre"] && $_POST["apellido"] && $_POST["dni"] && $_POST["carrera"]){
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $dni = $_POST["dni"];
    $carrera = $_POST["carrera"];
    $myfile = fopen ("estudiantes.txt","a") or die("no se pudo abrir el archivo");
    fwrite($myfile,"\r\n");
    fwrite($myfile,$nombre);
    fwrite($myfile,"\r\n");
    fwrite($myfile,$apellido);
    fwrite($myfile,"\r\n");
    fwrite($myfile,$dni);
    fwrite($myfile,"\r\n");
    fwrite($myfile,$carrera);
    fwrite($myfile,"\r\n");
    fclose($myfile);
    echo "Estudiante registrado";
    }else{
        echo "error al obtener valores";
    }
    fclose($myfile);
}
?>
</body>
</html>

<!--En alta_estudiante.php mostrar un formulario responsive que permita al usuario
ingresar los datos de un nuevo estudiante (nombre, apellido, dni y carrera). El mismo
archivo php deberá recibir los datos, validarlos y agregarlos en el archivo
estudiantes.txt.-->