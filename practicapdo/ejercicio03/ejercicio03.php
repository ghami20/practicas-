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

<title>Ingreso producto</title>
<h1 class="text-center"> Ingreso producto</h1>
</head>
<body class=" m-0 row justify-content-center">
    <div class="container col-auto p-5 text-center">
          <div class="container-form border  mb-3">
            <form class= "form form-primary" action="ejercicio03.php" method="post">
              <div class="mb-3 ">
                Nombre: <input type="text" name="nombre" pattern="[a-z]{1,50}." Required><br>
              </div>
              <div class="mb-3">
                Tipo: <input type="text" name="tipo" pattern="[a-z]{1,50}." Required><br>
              </div>
              <div class="mb-3">
              Precio venta: <input type="text" name="precioventa"  Required><br>
              </div>
              <div class="mb-3">
                Precio compra: <input type="text" name="preciocompra"  Required><br>
              </div>
              <button name="BtnEnviar" type="sumbit" class="btn btn-primary">Cargar producto</button>
            </form>
          </div>
        </div>

<!-- conexion con base de datos -->

<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$db="ejercicio02";
try {
$conn = new PDO("mysql:host=$servername;ejercicio02=".$db.";charset=utf8", 
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
<!-- inserto en la tabla -->
<?php

if(isset($_POST["BtnEnviar"])){
  if($_POST["nombre"] && $_POST["tipo"] && $_POST["precioventa"] && $_POST["preciocompra"]){
  $nombre = $_POST["nombre"];
  $tipo = $_POST["tipo"];
  $precioventa = $_POST["precioventa"];
  $preciocompra = $_POST["preciocompra"];

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname="ejercicio02";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, 
  $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->query("INSERT INTO `productos`(`Nombre`, `Tipo`, `PrecioVenta`, `PrecioCompra`) VALUES (' $nombre','$tipo','  $precioventa','$preciocompra')");

echo "<div class='col-center text-center'> Producto guardado correctamente </div>"; 
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