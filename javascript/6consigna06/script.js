function vectorabc() {
  let cadena = new array ['a','b','c','d','e','f','g','h','i','j','k','l','n','m','ñ','o','p','q','r','s','t','u','y','x','z']; 
  let contar = cadena.length;
  var array = document.getElementById("entrada");
  var i;
  for(i=0;i<cadena.length;i++){
    contar[i]=cuantasVecesAparece(array,cadena[i].value);
  }


  for (var i=0; i < cadena.length; i++) {
    document.getElementById("mostrar").innerHTML= "letra: "+ cadena[i] + " Numero: "+ contar[i] + "<br>" + "<br>" ;
 }
}

  function cuantasVecesAparece(cadena, caracter){
    var indices = [];
    for(var i = 0; i < cadena.length; i++) {
      if (cadena[i].toLowerCase() === caracter) indices.push(i);
    }
    return indices.length;
  }
//Estadística de cadenas de texto. Realiza una página que contenga una función
//JavaScript para hacer estadísticas sobre una cadena de texto que se le pase,
//contando el número de veces que aparece cada letra. Utilizar un Array para
//almacenar la información estadística.

function inicio(){
  document.getSelection
  document.getElementById("boton").addEventListener("click",vectorabc);
}

window.onload = inicio;