function Ejecutar() {
    var tbody = document.getElementById('my_tbody');
    var x = document.getElementsByTagName("tr");
    var i;
     for (i =0 ; i < x.length ; i++){
          if(espar(i)){
            x[i].classList.add("fila_impar");
            x[i].classList.remove("fila_par");
          }else{
            x[i].classList.add("fila_par");
            x[i].classList.remove("fila_impar");
          }
      }
  }
  
  function espar(valor) {
      return valor%2==0;  
  }
  
function calcularpromedio(){
var sum = 0;
var table = document.getElementById("my_tbody");
var ths = table.getElementsByTagName('tr');
var tds = table.getElementsByTagName('td');
for(var i=0;i<tds.length;i++){
    sum += isNaN(tds[i].innerText) ? 0 : parseInt(tds[i].innerText);
}

var row = table.insertRow(table.rows.length);
var cell = row.insertCell(0);
cell.setAttribute('colspan', ths.length);
var totalBalance  = document.createTextNode('Total Balance ' + sum/tds.length);
cell.appendChild(totalBalance);
}
  function inicio() {
      document.getElementById("invertir").addEventListener("click", Ejecutar);
      document.getElementById("promedio").addEventListener("click",calcularpromedio);
  }


window.onload = inicio;