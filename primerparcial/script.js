//despliega y cambia el mensaje del boton 
$(document).ready(function (){
    $("#Enviar").hide();
});

//cuando presiona enviar comienza a validar todos los campos ingresados 
    $('#Validar').click(function (event) { 
        console.log("Validando...");
        try{
            
            var formIsValid = true;
            
            var numeroclienteinput = $('#NroCliente'); 
            var Nombreinput = document.getElementById("NroCliente");
            var tipodocumentoinput = $('#tipodocumento');
            var numerodocumentoinput= $('#Numerodocumento');
            var mailinput = $('#Mail');
            var reclamoinput =$('#Reclamo');

            var numerocliente = parseInt(numeroclienteinput.val());
            var Nombre = Nombreinput.val();
            var tipodocumento = tipodocumentoinput.val();
            var numerodocumento= parseInt(numerodocumentoinput.val());
            var numerodocumentoarray = parseInt(numerodocumentoinput.val().length);
            var mail = mailinput.val();
            var reclamo = reclamoinput;
            
          //  toda esta parte deberia cambiarla para que cuando se reseetee el form esto se vuelva a resetear
            var divsErrors = $('.invalid-feedback');
            divsErrors.hide();

            inputs = [
                numeroclienteinput,
                Nombreinput,
                tipodocumentoinput,
                numerodocumentoinput,
                mailinput,
                reclamoinput,
               
            ]
            for (input of inputs) {
                input.removeClass('is-invalid');
            }

            
    
                // VALIDACIONES //
            /* if (!(numerocliente)) {
                 numeroclienteinput.addClass('is-invalid');
                var errorElement = $('#NroCliente-error1');
                errorElement.show();
                formIsValid = false;
            }*/
            if (!(numerocliente>= 1 && numerocliente <=20000)) {
                numeroclienteinput.addClass('is-invalid');
               var errorElement = $('#NroCliente-error2');
               errorElement.show();
               formIsValid = false;
           }
            // valido nombre completo palabras 
            var arraynombre = Nombre.trim().split(' ');
            if (!(arraynombre.length>=2)) {
                Nombreinput.addClass('is-invalid');
                var errorElement = $('#Nombre_error_1');
                errorElement.show();
                formIsValid = false;
            }
            //valido cada nombre sea mayor de 3 caracteres  
            for (i=0; i<2; i++) {
                if (!(arraynombre[i].length>=3)) {
                    Nombreinput.addClass('is-invalid');
                    var errorElement = $('#Nombre_error_2');
                    errorElement.show();
                    formIsValid = false;
                }     
            }
            //valido que haya elegido una categoria de tipo de documento 
            if(!(tipodocumento != null) ){

                tipodocumentoinput.addClass('is-invalid');
                var errorElement = $('#error_tipodocumento');
                errorElement.show();
                formIsValid = false;
            }else if (tipodocumento =="otros"){
                $('#Numerodocumento').html("<input type='text' class='form-control' id='Numerodocumento' name='Numerodocumento' required>"+"</input>");
            }
            if(!(tipodocumento ==  "DNI" || tipodocumento == "LC") && !(isNaN(tipodocumento))){
                tipodocumentoinput.addClass('is-invalid');
                var errorElement = $('#error_Numero_documento_caracteres');
                errorElement.show();
                formIsValid = false;
            }

            switch(tipodocumento){
                case "DNI":     
                if(!(numerodocumentoarray>=7 && numerodocumentoarray <= 8)){
                    console.log("error de caracteres dni tiene"+numerodocumento);
                numerodocumentoinput.addClass('is-invalid');
                var errorElement = $('#error_Numero_documento_DNI');
                errorElement.show();
                formIsValid = false;
                }
                break;
                case "LC":
                if(!(numerodocumentoarray>=6 && numerodocumentoarray<=8)){
                    console.log("error de caracteres lc/le tiene"+numerodocumentoinput.length);
                    numerodocumentoinput.addClass('is-invalid');
                    var errorElement = $('#error_Numero_documento_LC');
                    errorElement.show();
                    formIsValid = false;
                }
                break;
                case "otros": 
               /* 
                if(!(numerodocumentoarray==null)){
                    numerodocumentoinput.addClass('is-invalid');
                    var errorElement = $('#error_Numero_documento_otros');
                    errorElement.show();
                    formIsValid = false;
                }*/
                break;

            }


          //  hubiera usado expresiones regulares si hubiera tenido tiempo para determinar si existia @ en la cadena y . algo

            if (!(mail.length>7)) {
                mailinput.addClass('is-invalid');
                var errorElement = $('#error_Mail');
                errorElement.show();
                formIsValid = false;
             }


             // valido nombre completo palabras 
             if (!(reclamo.length < 10  )) {
                 reclamoinput.addClass('is-invalid');
                 var errorElement = $('#error_Reclamo1');
                 errorElement.show();
                 formIsValid = false;
             }
             //valido cada nombre sea mayor de 4 caracteres  



            
            //valido notas 
            
        

            if(formIsValid){
                console.log("lleguehastaaca");
                $("#Enviar").show();
                $("#Cerrar").click(function(event){
                   $("#my_form")[0].reset();;
                 
                });
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
