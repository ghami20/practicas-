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

<title>Productos</title>
<h1 class="text-center"> Listar Productos</h1>
</head>


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
<!-- ver tabla -->
<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname="ejercicio02";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8", $username, 
  $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->query("SELECT * FROM Productos");
echo " <div class='container-table p-5'>" ;
echo "<table class ='table table-primary'>";
echo "<tr>";
echo "  <th > Producto  </th>";
echo "  <th > id  </th>";
echo "  <th> Tipo </th>";
echo "  <th> PrecioVenta </th>";
echo "  <th> PrecioCompra </th>";
echo "</tr>";
while ($row = $stmt->fetch()) {
      echo "<tr>"; 
      echo "<td> " . $row['Nombre']."</td>";
      echo "<td> " .  $row['ID_Producto']. "</td>";
      echo "<td> " .  $row['Tipo']. "</td>";
      echo "<td> " .  $row['PrecioVenta']. "</td>";
      echo "<td> " .  $row['PrecioCompra']. "</td>";
      echo "</tr>";
      echo "</class ='table table-primary table>";
}
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}
$conn = null;
?>

</body>
</html>