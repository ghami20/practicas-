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

<title>eliminar producto</title>
<h1 class="text-center">producto a eliminar </h1>
</head>
<body class=" m-0 row justify-content-center">
    <div class="container col-auto p-5 text-center">
          <div class="container-form border  mb-3">
            <form class= "form form-primary" action="ejercicio05.php" method="post">
            <div class="mb-3 ">
                Id producto: <input type="number" name="idproducto" pattern="{1,50}." Required><br>
              </div>
              <button name="BtnEnviar" type="sumbit" class="btn btn-primary">Eliminar producto</button>
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
if( $_POST["idproducto"]){
$idprducto = $_POST["idproducto"];

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname="ejercicio02";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, 
  $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->query("DELETE FROM `productos` WHERE ID_Producto = ' $idprducto ';");
echo "<div class='col-center text-center'> Producto eliminado correctamente </div>"; 

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
