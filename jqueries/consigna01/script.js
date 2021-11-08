// JAVASCRIPT JQUERY
$(document).ready(function () {
    /* * /
    // OPCION 1
    $('#btn').click(function () {
        // $('#parrafo').toggleClass('oculto');
        if( $('#parrafo').hasClass('oculto')) {
            $('#parrafo').removeClass('oculto');
            $(this).html('Ocultar parrafo');
        } else {
            $('#parrafo').addClass('oculto');
            $(this).html('Mostrar parrafo');
        }
    });
    /* */

    /* * /
    // OPCION 2
    $('#btn').click(function () {
        $('#parrafo').toggle();
        if ($('#parrafo').is(':visible')) {
            $(this).html('Ocultar parrafo');
        } else {
            $(this).html('Mostrar parrafo');
        }
    });
    /* */

    /* */
    // OPCION 3
    $('#btn').click(function () {
        $('#parrafo').removeClass('oculto');
        if ($('#parrafo').is(':visible')) {
            var botonThis = $(this);
            $('#parrafo').slideUp('swing', function () {
                botonThis.html('Mostrar parrafo');
            });
        } else {
            $('#parrafo').slideDown();
            $(this).html('Ocultar parrafo');
        }
    });
    /* */
});



// JAVASCRIPT VANILLA
// function myFunction() {
//     if (document.getElementById("parrafo").style.display=="none") {
//         document.getElementById("parrafo").style.display="block";
//         document.getElementById("btn").innerHTML="Ocultar parrafo";
//     } else {
//         document.getElementById("parrafo").style.display="none";
//         document.getElementById("btn").innerHTML="Mostrar parrafo";
//     }
// }

// function inicio(){
//     document.getElementById("btn").addEventListener("click", myFunction);
// }
// window.onload=inicio;