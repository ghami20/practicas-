function inicio(){
      document.getElementById("text").addEventListener("keyup",imprimir)
}
function imprimir(e){
  console.log(e.key);
}

window.onload = inicio; // cuando carga la pagina se ejecutara esto 
