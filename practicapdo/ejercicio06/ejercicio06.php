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
<h1 class="text-center"> Ingreso producto</h1>
</head>
<body class=" m-0 row justify-content-center">
    <div class="container col-auto p-5 text-center">
          <div class="container-form border  mb-3">
            
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modaleditar">
        Editar productos
        </button>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modaleliminar">
        Eliminar productos
        </button>
          </div>
        </div>
    </div>


<!-- Modal editar -->
<div class="modal fade" id="modaleditar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-body">
          <form class= "form form-primary" action="ejercicio06.php" method="post">
                  <div class="mb-3 ">
                      Id producto: <input type="number" name="idproducto" pattern="{1,50}." Required><br>
                    </div>
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
      </div>
      <div class="modal-footer">
      <button name="BtnEditar" type="sumbit" class="btn btn-primary" data-bs-dismiss="modal">Editar producto</button>
            </form>
      </div>
    </div>
  </div>
</div>


<!-- Modal eliminar -->
<div class="modal fade" id="modaleliminar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">eliminar producto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class= "form form-primary" action="ejercicio06.php" method="post">
            <div class="mb-3 ">
                Id producto: <input type="number" name="idproducto" pattern="{1,50}." Required><br>
              </div>
            </form>
      </div>
      <div class="modal-footer">
      <button name="BtnEliminar" type="sumbit" class="btn btn-primary">Eliminar producto</button>
      </div>
    </div>
  </div>
</div>
<!-- conexion con base de datos -->
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
echo "  <th > id  </th>";
echo "  <th > Producto  </th>";
echo "  <th> Tipo </th>";
echo "  <th> PrecioVenta </th>";
echo "  <th> PrecioCompra </th>";
echo "</tr>";
while ($row = $stmt->fetch()) {
      echo "<tr>";
      echo "<td> " .  $row['ID_Producto']. "</td>";
      echo "<td> " . $row['Nombre']."</td>";
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

<!--Editar-->
<?php
if(isset($_POST["BtnEditar"])){
  if( $_POST["idproducto"] &&  $_POST["nombre"] && $_POST["tipo"] && $_POST["precioventa"] && $_POST["preciocompra"]){
  $idprducto = $_POST["idproducto"];
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
$stmt = $conn->query("UPDATE `productos` SET `Nombre`=' $nombre',`Tipo`='  $tipo',`PrecioVenta`=' $precioventa',`PrecioCompra`=' $preciocompra' WHERE ID_Producto = ' $idprducto ';");
echo "<div class='col-center text-center'> Producto editado correctamente </div>"; 
}

catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}
$conn = null;
}
}
?>

<!--Eliminar-->
<?php

if(isset($_POST["BtnEliminar"])){
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