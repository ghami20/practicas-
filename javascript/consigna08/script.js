function inpQuitarVocales(){
  var text= document.getElementById("entrada").value;
  console.log(text);
  let resultado = text.replace(/[aeiou]/g,'');
  document.getElementById("entrada").value=resultado;
}

function inicio(){
  var boton = document.getElementById("boton");
  boton.addEventListener("click",inpQuitarVocales);
}

window.onload = inicio(); // cuando carga la pagina se ejecutara esto 