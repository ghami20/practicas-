function esconder() {
    let = parrafo = document.getElementById("parrafo");
    let unboton = document.getElementById("unboton");
   if(parrafo.style.display=="none"){
       unboton.innerHTML="ocultar";
       parrafo.style.display="block";
   }else{
       boton.innerHTML="mostar";
       parrafo.style.display="none";
   }
}

function inicio() {
    document.getElementById("parrafo").style.display="none";
    document.getElementById("unboton").addEventListener("click", esconder)
}

window.onload = inicio; // cuando carga la pagina se ejecutara esto 