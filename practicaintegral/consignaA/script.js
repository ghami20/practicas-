$(document).ready(function (event){

    $('#my_button').click(function () {
        var botonThis = $(this);
        if($('#container_cmbbox ').is('d-none')){
            botonThis.html('bienvenido');
            $('#container_cmbbox ').toggleClass('d-none');
        }else{
            $('#container_cmbbox ').toggleClass('d-none');
            $(this).html('cerrar pagina');
        }
    });
    $('#grupo').change(function(event){
        console.log($("#grupo").val());
        var valor = $("#grupo option:selected").val()
        switch(valor){
            case "FAC":
                $('#equipoFAC').toggleClass('d-none');
                break;
            case "HADZ":
                $('#equipoHADZ').toggleClass('d-none');
                break;
        }

        $('#equipoFAC').change(function(){
            console.log($("#equipoFAC").val());
            if($('#container_form ').is('d-none')){
                $('#container_form ').toggleClass('d-none');
            }else{
                $('#container_form ').toggleClass('d-none');
            }

        });

        $('#equipoHADZ').change(function(event){
            console.log($("#equipoHADZ").val());
            if($('#container_form ').is('d-none')){
                $('#container_form ').toggleClass('d-none');
            }else{
                $('#container_form ').toggleClass('d-none');
            }
        });
    });

});
    //valido que se haya enviado bien 
    $('#Enviar').click(function (event) { 
            console.log("Validando...");
            
        try{
            var formIsValid = true;
            var fecharevisioninput = $('#fecha_revision');
            var Horadeinicioinput =  $('#horainicio');
            var Horadefininput =  $('#horafin');
            var resultadoinput = $('#Resultado');
            var fechaHoy = new Date();
    
            var fecharevision = new Date(fecharevisioninput.val());
            var Horadeinicio = parseInt(Horadeinicioinput.val());
            var Horadefin =  parseInt(Horadefininput.val());
            var resultado = resultadoinput.val();
        
            var divsErrors = $('.invalid-feedback');
             divsErrors.hide();
 
             inputs = [
                fecharevisioninput,
                Horadeinicioinput,
                Horadefininput,
                resultadoinput,
             ]
             for (input of inputs) {
                 // input.setCustomValidity('');
                 input.removeClass('is-invalid');
             }
     
    
                // VALIDACIONES //
            
            //valido fecha de revision 
            if (!( fecharevision.getTime() <=fechaHoy.getTime())) {
                fecharevisioninput.addClass('is-invalid');
                var errorElement =  $('#fecha_revision_error'); 
                errorElement.show();
                formIsValid = false;
            }

            if (!(Horadeinicio < Horadefin)){
                Horadefininput.addClass('is-invalid');
                var errorElement =  $('#error_hora_fin');
                errorElement.show();
                formIsValid = false;
            }

            var arrayPalabras = resultado.trim().split(' ');
            if (!(arrayPalabras.length>=5)) {
                resultadoinput.addClass('is-invalid');
                var errorElement = $('#error_resultado_1');
                errorElement.show();
                formIsValid = false;
            }

            if(formIsValid){
                console.log(formIsValid);
               $('#exampleModal').toggleClass("modal");
               resetfunction(this);
            }
        
        } catch (exe) {
            console.log(exe)
            event.preventDefault();
            return false;
        }
        if (!formIsValid) {
            event.preventDefault();
            return false;    
        }
    });
