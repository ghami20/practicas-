function Ejecutar() {
  var tbody = document.getElementById('my_tbody');

    //crear nodo de tipo element 
  var x = document.getElementsByName("TR");
    // tr.inngerhtml = "<td>x</td><td>y</td>"

    var td1 = document.createElement("td"); 
    var td2 = document.createElement("td"); 

    //crear nodo tipo text 
    td1.innerHTML = "X";
    var td2text = document.createTextNode("Y"); 

    td2.appendChild(td2text);

    tr.appendChild(td1);
    tr.appendChild(td2); 

    tbody.appendChild(tr);
}

function inicio() {
    document.getElementById("button").addEventListener("click", Ejecutar)
}

window.onload = inicio; // cuando carga la pagina se ejecutara esto 
