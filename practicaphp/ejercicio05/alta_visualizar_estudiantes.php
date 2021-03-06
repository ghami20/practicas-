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
<h1 class="text-center"> Listar estudiantes</h1>
</head>
<body class=" m-0 row justify-content-center">
    <div class="container col-auto p-5 text-center">
          <div class="container-form border  mb-3">
            <form class= "form form-primary" action="alta_visualizar_estudiantes.php" method="post">
              <div class="mb-3 ">
                Nombre: <input type="text" name="nombre" pattern="[a-z]{1,15}." Required><br>
              </div>
              <div class="mb-3">
                Apellido: <input type="text" name="apellido" pattern="[a-z]{1,15}." Required><br>
              </div>
              <div class="mb-3">
              Dni: <input type="text" name="dni" pattern="{1,9}" min = "7" max = "8" Required><br>
              </div>
              <div class="mb-3">
                Carrera: <input type="text" name="carrera" pattern="[a-z]{1,30}." Required><br>
              </div>
              <button name="BtnEnviar" type="sumbit" class="btn btn-primary">enviar</button>
            </form>
            <form class= "form form-primary" action="alta_visualizar_estudiantes.php" method="post">
              <br>
              <button name="VerAlumnos" type="sumbit" class="btn btn-primary">ver alumnnos </button>
              <button name="reset" type="sumbit" class="btn btn-primary">ocultar</button>
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
    fwrite($myfile,$nombre);
    fwrite($myfile,"|");
    fwrite($myfile,$apellido);
    fwrite($myfile,"|");
    fwrite($myfile,$dni);
    fwrite($myfile,"|");
    fwrite($myfile,$carrera);
    fwrite($myfile,"\r\n");
    echo "Estudiante registrado";
    fclose($myfile);
    }else{
        echo "error al obtener valores";
        fclose($myfile);
    }
  }
?>


<?php
if(isset($_POST["VerAlumnos"])){
    $myfile = fopen ("estudiantes.txt","r") or die("no se pudo abrir el archivo");
    echo " <div class='container-table p-5'>" ;
    echo "<table class ='table table-primary'>";
    echo "<tr>";
    echo "  <th > Nombre  </th>";
    echo "  <th> Apellido </th>";
    echo "  <th> Dni </th>";
    echo "  <th> Carrera </th>";
    echo "</tr>";
    while($linea=fgets($myfile)){
      $array = explode("|",$linea);
      $nombre = $array[0];
      $apeliido = $array[1];
      $dni = $array[2];
      $carrera = $array[3];
      
      echo "<tr>";
      echo "<td> " . $nombre."</td>";
      echo "<td> " .   $apeliido. "</td>";
      echo "<td> " .   $dni. "</td>";
      echo "<td> " .   $carrera. "</td>";
      echo "</tr>";
      echo "</class ='table table-primary table>";
  }
  fclose($myfile);
}else{

}
?>

<?php
if(isset($_POST["reset"])){
}
?>

</body>
</html>

<!--En alta_estudiante.php mostrar un formulario responsive que permita al usuario
ingresar los datos de un nuevo estudiante (nombre, apellido, dni y carrera). El mismo
archivo php deber?? recibir los datos, validarlos y agregarlos en el archivo
estudiantes.txt.-->