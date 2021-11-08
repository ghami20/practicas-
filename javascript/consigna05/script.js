function Ejecutar() {
  var tbody = document.getElementById('my_tbody');
  var x = document.getElementsByTagName("TR");
  var i;
   for (i = 0 ; i < x.length; i++){
        if(espar(i)){
            tbody.removeChild(x[i]);
        }
    }
}

function espar(valor) {
    return valor%2==0;  
}


function inicio() {
    document.getElementById("button").addEventListener("click", Ejecutar)
}

window.onload = inicio; // cuando carga la pagina se ejecutara esto 
