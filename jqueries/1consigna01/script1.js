/*function cuenta_palabra(cadenaADividir) {
  var espacio =" ";
  var arrayDeCadenas = cadenaADividir.split(espacio);
  document.getElementById("mostrar_reves").innerHTML= "hay "+ arrayDeCadenas.length +" palabras";
}
function da_vuelta_palabra(cadenaADividir){
  var strReverse = cadenaADividir.split('').reverse().join('');
  document.getElementById("mostrar_cantidad").innerHTML= "la palabra al revez es: "+ strReverse; 
}
function primerpalabra(cadenaADividir){
var primera = cadenaADividir.split(" ", 1);
document.getElementById("mostrar_primer").innerHTML= "la primer palabra es: "+ primera;
}
function ultimapalabra(cadenaADividir){
  var espacio =" ";
  var arrayDeCadenas = cadenaADividir.split(espacio);
      for (var i=0; i < arrayDeCadenas.length; i++) {
          if(arrayDeCadenas[i]==arrayDeCadenas.length){
            document.getElementById("mostrar_ultima").innerHTML= "la ultima palabra es: "+ arrayDeCadenas[i];
          }
     }
  }

function mostrarresultados(){
 var texto = document.getElementById("textoentrada").value;
 cuenta_palabra(texto);
 da_vuelta_palabra(texto);
 primerpalabra(texto);
 ultimapalabra(texto);
}
function inicio(){
    document.getElementById("boton").addEventListener("click",mostrarresultados);
}

window.onload = inicio;

*/

//Arrays. Leer una cadena de texto en un input y generar un array con la función
//split(). Posteriormente, mostrar la siguiente información: Número de palabras,
//primera palabra, última palabra, las palabras colocadas en orden inverso, las
//palabras ordenadas de la a la z y las palabras ordenadas de la z a la a.
$(document).ready(function () {
    $('#boton').click(function(){
      var texto = $('#textoentrada').val();
      cuenta_palabra(texto);
      da_vuelta_palabra(texto);
      primerpalabra(texto);
      ultimapalabra(texto);
      palabrasinverso(texto);

    });
    function cuenta_palabra(cadenaADividir){
        var espacio =" ";
        var arrayDeCadenas = cadenaADividir.split(espacio);
        var texto = $('#mostrar_cantidad')
        
        texto.html( "hay "+ arrayDeCadenas.length +" palabras");


    }
    function da_vuelta_palabra(cadenaADividir){
     var strReverse = cadenaADividir.split('').reverse().join('');
     var texto = $('#mostrar_reves')

     texto.html("la palabra al revez es: "+ strReverse); 
    }

    function primerpalabra(cadenaADividir){
      var primera = cadenaADividir.split(" ", 1);
      var texto = $('#mostrar_primer')
      texto.html("la primer palabra es: "+ primera);
    }
    function ultimapalabra(cadenaADividir){
      var texto = $('#mostrar_ultima')

      var strReverse = cadenaADividir.split('').reverse().join('');

      var primera = strReverse.split(" ", 1);

      var resultado = primera.reverse().join('');
      console.log(resultado);

      
      texto.html("la ultima palabra es: "+ resultado);
      }

      function palabrasinverso(cadenaADividir){
        var texto = $('#mostrar_inverso')
  
        var strReverse = cadenaADividir.split('').reverse().join('');
  
        var primera = strReverse.split(" ", 1);
  
        var resultado = primerasplit(" ", 1).reverse().join('');
        console.log(resultado);
  
        
        texto.html("la ultima palabra es: "+ resultado);
        }
  




     // las palabras colocadas en orden inverso, las
//palabras ordenadas de la a la z y las palabras ordenadas de la z a la a.
         

});