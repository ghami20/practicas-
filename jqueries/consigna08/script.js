
$(document).ready(function () {


  $('#boton').click(function () {
   var text = $("#entrada").val();
  let resultado = text.replace(/[aeiou]/g,'');
   $("#salida").html(resultado);
  });
});

