
//Generar el código necesario para modificar la clase de todos los párrafos, colocando la
//clase “parrafo_resaltado”. Ejemplificar su uso.

function subrayar() {
  var x = document.getElementsByTagName("p");
  var i;
   for (i = 0 ; i < x.length; i++){
        var s1 = x[i].className;
        console.log(x[i].classList);
        x[i].classList.add("parrafo_resaltado");
    }
}

function inicio() {
    document.getElementById("button").addEventListener("click", subrayar)
}

window.onload = inicio; // cuando carga la pagina se ejecutara esto 
