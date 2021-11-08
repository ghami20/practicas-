function esconder(c) {
  var x = document.getElementById("mifoto");
  var y = document.getElementById("unboton");
  var z = document.getElementById("unlabel");

      if(c==1){
        x.classList.add("esconder");
      }else if(c==2){
        y.classList.add("esconder");
      }else if(c==3){
        z.classList.add("esconder");
      }

}

function mostrar(){
  var x = document.getElementById("mifoto");
  var y = document.getElementById("unboton");
  var z = document.getElementById("unlabel");


        x.classList.remove("esconder");
        y.classList.remove("esconder");
        z.classList.remove("esconder");

}


function inicio(){
  document.getSelection
  x = document.getElementById("mifoto").addEventListener("onmouseover", esconder(1));
  y = document.getElementById("unboton").addEventListener("onmouseover", esconder(2));
  z = document.getElementById("unlabel").addEventListener("onmouseover", esconder(3));

  document.getElementById("boton").addEventListener("click",mostrar);
}

window.onload = inicio;