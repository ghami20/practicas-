//despliega y cambia el mensaje del boton 
$(document).ready(function (){

    $('#Ingresar_nuevo_alumno').click(function () {
        var botonThis = $(this);
        if($('#container_form').hasClass('d-none')){
            botonThis.html('cerrar');
            $('#container_form').toggleClass('d-none');
        }else{
            $('#container_form').toggleClass('d-none');
            $(this).html('ingresar alumno nuevo');
        }
    });
});

//cuando presiona enviar comienza a validar todos los campos ingresados 
    $('#Enviar').click(function (event) { 
        console.log("Validando...");
        try{
            
            var formIsValid = true;
            
            var Nombreinput = $('#Nombre');
            var tipodocumentoinput = $('#tipodocumento');
            var numerodocumentoinput= $('#Numerodocumento');
            var nota1parcialinput = $('#Notaprimerparcial');
            var nota2parcialinput = $('#Notasegundoparcial');
            var nota1recuperatorioinput = $('#Nota_primer_recuperatorio');
            var nota2recuperatorioinput = $('#Nota_segundo_recuperatorio');

            var Nombre = Nombreinput.val();
            var tipodocumento = tipodocumentoinput.val();
            var numerodocumento= parseInt(numerodocumentoinput.val());
            var numerodocumentoarray = parseInt(numerodocumentoinput.val().length);
            var nota1parcial = parseInt(nota1parcialinput.val());
            var nota2parcial = parseInt(nota2parcialinput.val());
            var nota1recuperatorio = parseInt(nota1recuperatorioinput.val());
            var nota2recuperatorio = parseInt(nota2recuperatorioinput.val()); 
            
            
            var divsErrors = $('.invalid-feedback');
            divsErrors.hide();

            inputs = [
                Nombreinput,
                tipodocumentoinput,
                numerodocumentoinput,
                nota1parcialinput,
                nota2parcialinput, 
                nota1recuperatorioinput,
                nota2recuperatorioinput,  
            ]
            for (input of inputs) {
                input.removeClass('is-invalid');
            }
    
                // VALIDACIONES //
         
            
            //valido nombre completo caracteres  
            if (!(Nombre.length<30)) {
                console.log("llegue a verificar esto");
                Nombreinput.addClass('is-invalid');
                var errorElement = $('#Nombre_error_1');
                errorElement.show();
                formIsValid = false;
            }
            // valido nombre completo palabras 
            var arraynombre = Nombre.trim().split(' ');
            if (!(arraynombre.length>=2)) {
                Nombreinput.addClass('is-invalid');
                var errorElement = $('#Nombre_error_2');
                errorElement.show();
                formIsValid = false;
            }
            //valido cada nombre sea mayor de 4 caracteres  
            for (i=0; i<2; i++) {
                if (!(arraynombre[i].length>=4)) {
                    Nombreinput.addClass('is-invalid');
                    var errorElement = $('#Nombre_error_3');
                    errorElement.show();
                    formIsValid = false;
                }     
            }
            //valido que haya elegido una categoria de tipo de documento 
            if(!(tipodocumento ==  "DNI" || tipodocumento == "LC" ) ){

                tipodocumentoinput.addClass('is-invalid');
                var errorElement = $('#error_tipodocumento');
                errorElement.show();
                formIsValid = false;
            }

            switch(tipodocumento){
                case "DNI":     
            //if(!(tipodocumento == "DNI")){
                if(!(numerodocumentoarray>=7 && numerodocumentoarray <= 8)){
                    console.log("error de caracteres dni tiene"+numerodocumento);
                numerodocumentoinput.addClass('is-invalid');
                var errorElement = $('#error_Numero_documento_DNI');
                errorElement.show();
                formIsValid = false;
                }
                break;
            //  }else if(!(tipodocumento == "LC" )){ habia usado esto atnes pero lo cambie por un switch
                case "LC":
                if(!(numerodocumentoarray>=6 && numerodocumentoarray<=8)){
                    console.log("error de caracteres lc/le tiene"+numerodocumentoinput.length);
                    numerodocumentoinput.addClass('is-invalid');
                    var errorElement = $('#error_Numero_documento_LC');
                    errorElement.show();
                    formIsValid = false;
                }
                break;
            }
            
            //valido notas 
            console.log("la nota es "+ nota1parcial);
            console.log("la nota es "+ nota2parcial);
            console.log("la nota es "+ nota1recuperatorio);
            console.log("la nota es "+ nota2recuperatorio);
            console.log("valido");
            
            if(!(nota1parcial >= 1 && nota1parcial <=10)){
                nota1parcialinput.addClass('is-invalid');
                var errorElement = $('#error_primer_parcial');
                errorElement.show();
                formIsValid = false;
            }

            if(!(nota2parcial >=1 && nota2parcial <=10)){
                nota2parcialinput.addClass('is-invalid');
                var errorElement = $('#error_segundo_parcial');
                errorElement.show();
                formIsValid = false;
            }

            if(!(nota1recuperatorio >=1 && nota1recuperatorio <=10)){
                nota1recuperatorioinput.addClass('is-invalid');
                var errorElement = $('#error_primer_recuperatorio');
                errorElement.show();
                formIsValid = false;
            }

            if(!(nota2recuperatorio >=1 && nota2recuperatorio <=10)){

                nota2recuperatorioinput.addClass('is-invalid');
                var errorElement = $('#error_segundo_recuperatorio');
                errorElement.show();
                formIsValid = false;
            }
                // AGREGAR UNA FILA AL FORM 
                //solo se agrega si pasa las validaciones y formisvalid es true
            if(formIsValid){
                console.log("llegue hasta aca");
                var tbody = $('#my_tbody');
                
                    
                var tr = $("<tr class='table-primary'></tr>"); 
                    
                var td1 = $("<td ></td>").text(Nombre);
                    
                var td2 = $("<td>"+tipodocumento+"</td>");

                var td3 = $("<td>"+numerodocumento+"</td>");

                var td4 = $("<td>"+nota1parcial+"</td>");

                var td5 = $("<td>"+nota2parcial+"</td>");

                var td6 = $("<td>"+nota1recuperatorio+"</td>");

                var td7 = $("<td>"+nota2recuperatorio+"</td>");

                var resultado ; 
     
                   resultado =(nota1parcial + nota2parcial )/2 ;  
                   
                   if (resultado<4){
                    var td8 = $("<td style='background-color:red;' >"+ resultado +"</td>");   
                   // var td8 = $("<td class='td_nota_reprobado' >"+ resultado +"</td>");  
                   }
                   if(resultado>=7){
                       
                       var td8 = $("<td style='background-color:blue;'>"+ resultado +"</td>");  
                       // var td8 = $("<td class='td_nota_promocionado'>"+ resultado +"</td>"); trate de usar esto pero no funciono  
                   }
                   if(resultado>=7 && resutlado >=4){
                    var td8 = $("<td style='background-color:green;'>"+ resultado +"</td>");  
                    // var td8 = $("<td class='td_nota_aprobado'>"+ resultado +"</td>"); trate de usar esto pero no funciono  
                   }
                   if(resultado = 0){
                    var td8 = $("<td style='background-color:yellow;'>"+ resultado +"</td>");  
                    // var td8 = $("<td class='td_nota_ausente'>"+ resultado +"</td>"); trate de usar esto pero no funciono  
                   } 


                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(td4);
                tr.append(td5);
                tr.append(td6);
                tr.append(td7);
                tr.append(td8);
                tbody.append(tr);
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
        resetfunction(this);
});
//ordeno los nombres alfabeticamente cuando se presiona el boton 
$('#OrdenarXnombre').click(function (e) {
    var asc = 'asc';
    $("#my_tbody").find('tr').sort((a, b) => {
      if (asc) {
        return $('td', a).text().localeCompare($('td', b).text());
      } else {
        return $('td', b).text().localeCompare($('td', a).text());
      }
    }).appendTo($("#my_tbody"));
  });