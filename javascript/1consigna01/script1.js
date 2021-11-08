function cuenta_palabra(cadenaADividir) {
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



//Arrays. Leer una cadena de texto en un input y generar un array con la función
//split(). Posteriormente, mostrar la siguiente información: Número de palabras,
//primera palabra, última palabra, las palabras colocadas en orden inverso, las
//palabras ordenadas de la a la z y las palabras ordenadas de la z a la a.
