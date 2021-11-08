$(document).ready(function () {

  $('#btn').click(function () {
    //para aplicar el required todas las veces que se aprieta el boton deberia usar un formluario, y 
    //el boton deberia ser de tipo sumbit en vez de el evento click, deberia ser el evento sumbit
      var tbody = $('#my_tbody');
      //alert("Value: " + $('#1agregar').val());
      var agregar1 = $("#1agregar").val();
      var agregar2 = $("#2agregar").val();
      var agregar3 = $("#3agregar").val();

      var tr = $("<tr></tr>"); 
      //
      //var td1 = $("<td></td>").html(agregar1);

      var td2 = $("<td></td>").text(agregar2);

      var td3 = $("<td>"+agregar3+"</td>");

      tr.append($("<td></td>").html(agregar1));
      tr.append(td2);
      tr.append(td3);

      tbody.append(tr);
         
  });
  
});