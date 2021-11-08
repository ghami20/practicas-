function validar() {
  var numero = document.getElementById("ingreso").value;
  if(numero>=1 && numero<=923){
    document.getElementById("salida").innerHTML= numero+ " Es valido";
  }else{
    document.getElementById("salida").innerHTML= numero+ " Es invalido";
  }
  document.getElementById("ingreso").innerHTML='';


}

function inicio(){
  document.getElementById("boton").addEventListener("click",validar);

}

window.onload = inicio;