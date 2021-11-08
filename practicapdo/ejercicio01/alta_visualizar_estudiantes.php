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

<!-- conexion con base de datos -->

<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$db="ejercicio05";
try {
$conn = new PDO("mysql:host=$servername;ejercicio05=".$db.";charset=utf8", 
$username, $password);
    // set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}
?>

<?php
$conn = null;
?>

<!-- querys -->
<!-- ver tabla -->
<?php
if(isset($_POST["VerAlumnos"])){
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname="ejercicio05";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, 
  $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->query("SELECT * FROM alumnos");
echo " <div class='container-table p-5'>" ;
echo "<table class ='table table-primary'>";
echo "<tr>";
echo "  <th > Nombre  </th>";
echo "  <th> Apellido </th>";
echo "  <th> Dni </th>";
echo "  <th> Carrera </th>";
echo "</tr>";
  
while ($row = $stmt->fetch()) {
      echo "<tr>";
      echo "<td> " . $row['Nombre']."</td>";
      echo "<td> " .  $row['Apellido']. "</td>";
      echo "<td> " .  $row['Dni']. "</td>";
      echo "<td> " .  $row['Carrera']. "</td>";
      echo "</tr>";
      echo "</class ='table table-primary table>";
}
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}
$conn = null;
}
?>
<!-- inserto en la tabla -->
<?php

if(isset($_POST["BtnEnviar"])){
  if($_POST["nombre"] && $_POST["apellido"] && $_POST["dni"] && $_POST["carrera"]){
  $nombre = $_POST["nombre"];
  $apellido = $_POST["apellido"];
  $dni = $_POST["dni"];
  $carrera = $_POST["carrera"];

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname="ejercicio05";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, 
  $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->query("INSERT INTO `alumnos`(`Nombre`, `Apellido`, `Dni`, `Carrera`) VALUES ('$nombre','$apellido','$dni','$carrera')");
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}
$conn = null;
}
}
?>

</body>
</html>