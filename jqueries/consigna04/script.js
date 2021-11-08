
//Generar el código necesario para modificar la clase de todos los párrafos, colocando la
//clase “parrafo_resaltado”. Ejemplificar su uso.
$(document).ready(function () {

    $('#btn').click(function () {
        // $('#parrafo').toggleClass('oculto');
        if( $('.parrafo').hasClass('parrafo_resaltado')) {
            $('.parrafo').removeClass('parrafo_resaltado');
            $(this).html('subrayar parrafo');
        } else {
            $('.parrafo').addClass('parrafo_resaltado');
            $(this).html('quitar subrayado parrafo');
        }
    });
});
