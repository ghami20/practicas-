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
    </div>
<?php
    $myfile = fopen ("estudiantes.txt","r") or die("no se pudo abrir el archivo");
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
?>


</body>
</html>

<!--En alta_estudiante.php mostrar un formulario responsive que permita al usuario
ingresar los datos de un nuevo estudiante (nombre, apellido, dni y carrera). El mismo
archivo php deberá recibir los datos, validarlos y agregarlos en el archivo
estudiantes.txt.-->