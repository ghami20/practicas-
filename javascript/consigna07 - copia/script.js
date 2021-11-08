function inicio(){
var entrada = document.getElementById('entrada');
entrada.addEventListener('keypress',anexar);
var borrar = document.getElementById('borrar');
borrar.addEventListener('click',limpiar);
var salida = document.getElementById('salida');
}
function anexar(e){
  salida.innerHTML += e.key + '<br />';
  console.log(e.key)
}

function limpiar(e){
  entrada.value = '';
  salida.innerHTML = '';
}
window.onload = inicio; // cuando carga la pagina se ejecutara esto 
