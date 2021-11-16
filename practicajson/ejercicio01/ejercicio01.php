<!DOCTYPE html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>provincias </title>
        
        <!-- Bootstrap CSS -->
        
        <link href="styles.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"></script>
  
  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
      </script>       

<script src="./json.js"></script>

</head> 
<h1 class="text-center "> Listar provincias</h1>
<body>
    <div class="container md-4 text-center">

            <div class="container-form mb-4 " id="container_provincia">
                
              <select name="provincias" id="provincias">
                  <option value="">elija una opcion</option>
                  <option value="buenos aires">buenos aires</option>
                  <option value="CABA">CABA</option>
                </select>
                
            </div>
            
          <div class="container-form   mb-4   d-none" id="container_municipios">
              
              <select name="municipios" id="municipios">
                  <option value="municipios">municipios</option>
                </select>
                
          </div>
          <div class="container-form   mb-4 d-none" id="container_comunas">
              
              <select name="comunas" id="comunas">
                  <option value="comunas">comunas</option>
                </select>
                
            </div>
        </div>
    </div>
        
<script type="text/javascript">
    
/*
var obj = {"provincias":[
        {"provincia":"buenos aires"},
        {"provincia":"CABA"},
    ]};

obj.provincias.forEach(provincia=> {
    var option = document.createElement("Option");
    var text = document.createTextNode(provincia.provincia);
    option.appendChild(text);
  //  console.log(option);
    document.getElementById("provincias").appendChild(option);
});
*/
</script>

<script type="text/javascript">
    /*

    var obj = {"municipios":[
        {"municipio":"25 de mayo"},
        {"municipio":"General Arenales"},
        {"municipio":"Necochea"},
        {"municipio":"Adolfo Alsina"},
        {"municipio":"General Belgrano"},
        {"municipio":"Nueve de Julio"},
        {"municipio":"Adolfo González Chávez"},
        {"municipio":"General Guido"},
        {"municipio":"Olavarría"},
        {"municipio":"Alberti"},
        {"municipio":"General Juan Madariaga"},
        {"municipio":"Patagones"},
        {"municipio":"Almirante Brown"},
        {"municipio":"General Lamadrid"},
        {"municipio":"Pehuajó"},
        {"municipio":"Arrecifes"},
        {"municipio":"General Las Heras"},
        {"municipio":"Pellegrini"},
        {"municipio":"Avellaneda"},
        {"municipio":"General Lavalle"},
        {"municipio":"Pergamino"},
        {"municipio":"Ayacucho"},
        {"municipio":"General Paz"},
        {"municipio":"Pila"},
        {"municipio":"Azul"},
        {"municipio":"General Pinto"},
        {"municipio":"Pilar"}
    ]};

obj.municipios.forEach(municipio=> {
    var option = document.createElement("Option");
    var text = document.createTextNode(municipio.municipio);
    option.appendChild(text);
   // console.log(option);
    document.getElementById("municipios").appendChild(option);
});*/
</script>
<script type="text/javascript">
    /*

    var obj = {"comunas":[
        {"comuna":" Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución"},
        {"comuna":"Recoleta"},
        {"comuna":"Balvanera y San Cristóbal"},
        {"comuna":"La Boca, Barracas, Parque Patricios y Nueva Pompeya"},
        {"comuna":"Almagro y Boedo"},
        {"comuna":"Caballito"},
        {"comuna":"Flores y Parque Chacabuco"},
        {"comuna":"Villa Soldati, Villa Riachuelo y Villa Lugano"},
        {"comuna":"Liniers, Mataderos y Parque Avellaneda"},
        {"comuna":"Villa Real, Monte Castro, Versalles, Floresta, Vélez Sarfield y Villa Luro"},
        {"comuna":"Villa General Mitre, Villa Devoto, Villa del Parque y Villa Santa Rita"},
        {"comuna":"Coghlan, Saavedra, Villa Urquiza y Villa Pueyrredón"},
        {"comuna":"Núñez, Belgrano y Colegiales"},
        {"comuna":"Palermo"},
        {"comuna":"Chacarita, Villa Crespo, La Paternal, Villa Ortúzar, Agronomía y Parque Chas"},
    ]};
obj.comunas.forEach(comuna=> {
    var option = document.createElement("Option");
    var text = document.createTextNode(comuna.comuna);
    option.appendChild(text);
  //  console.log(option);
    document.getElementById("comunas").appendChild(option);
}); */

</script>

</body>
</html>
