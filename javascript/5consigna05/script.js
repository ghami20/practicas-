function remover(){
var seleccionlista = document.getElementById("selecionado");
var seleccionado = document.getElementById("selecionado").selectedIndex.value;
var listopcion = document.getElementsByTagName("option");
var i ;

    for (i = 0 ; i< listopcion.length;i++){
      if(listopcion[i].value==seleccionado){
        seleccionlista.removeChild(seleccionado);
      }
    }

}
function cambiar(){
document.getElementById("ingresotexto").style.display="block";
document.getElementById("cambiarbtn").style.display="block";
var seleccionlista = document.getElementById("selecionado");
var seleccionado = document.getElementById("selecionado").addEventListener("select").getSelection;
var listopcion = document.getElementsByTagName("option");
var modifica = document.getElementById("modifica");
var i ;

    for (i = 0 ; i< listopcion.length;i++){
      if(listopcion[i].value==seleccionado){
        seleccionlista.childNodes.value=modifica;
      }
    }
}
function agregar(){
  document.getElementById("ingresotexto").style.display="block";
  document.getElementById("agregarbtn").style.display="block";
    var seleccionlista = document.getElementById("selecionado");
    var seleccionado = document.getElementById("selecionado").addEventListener("select").getSelection;
    var listopcion = document.getElementsByTagName("option");
    var modifica = document.getElementById("modifica");
    var i ;

    for (i = 0 ; i< listopcion.length;i++){
      if(listopcion[i].value==seleccionado){
        seleccionlista.appendChild(modifica);
      }
    }
}
function inicio(){
  document.getElementById("cambiarbtn").style.display="none";
  document.getElementById("agregarbtn").style.display="none";
  document.getElementById("ingresotexto").style.display="none";
  document.getElementById("remover").addEventListener("click",remover);
  document.getElementById("agregar").addEventListener("click",agregar);
  document.getElementById("cambiar").addEventListener("click",cambiar);
}

window.onload = inicio;
