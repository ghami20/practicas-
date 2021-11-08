

//Generar el código necesario para que cada vez que se presione una tecla sobre un
//determinado input (referenciarlo por ID) se muestre la tecla presionada en la consola.
$(document).ready(function () {


  $('#text').keyup(function () {
    console.log($("#text").val());


  });
});

