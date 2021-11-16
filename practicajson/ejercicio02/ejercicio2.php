<!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Noticias </title>
        
        <!-- Bootstrap CSS -->
        
        <link href="styles.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"></script>
  
  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
      </script>       

<script src="script.js"></script>
</head> 
<body>
  <h1 class=" text-center">Noticias </h1>

  <div class="container col-4  text-center " id="container_noticia">
    <menu>
      
      <select name="cargarNoticia" id="cargarNoticia">
        <option value="">elija una opcion</option>
        <option value="Nacionales">Nacionales</option>
        <option value="Deporte">Deporte</option>
        <option value="Espectaculo">Espectaculo</option>
      </select>
      
    </menu>
  </div>
<div class="d-none" id="container_nacionales"> 
<div id="nacionales">

  </div>
</div>
<div  class="d-none"  id="container_deporte"> 
  <div id="deportes">

  </div>
</div>
<div  class="d-none"  id="container_espectaculo"> 
<div id="espectaculo">
</div>
</div>

</body>
</html>
