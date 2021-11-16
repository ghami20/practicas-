$(document).ready(()=>{
    $('#cargarNoticia').change(function (event) {
        //console.log($("#provincias").val());
        var valor = $("#cargarNoticia option:selected").val()
        $('#container_espectaculo').addClass('d-none');
        $('#container_deporte').addClass('d-none');
        $('#container_nacionales').addClass('d-none');
        switch(valor){
            case "Nacionales":
                $('#container_nacionales').toggleClass('d-none');
                $.ajax({
                    type: "POST",
                    url: "nacionales.json",
                    contentType: "application/json; charset=utf-8",
                    data: null,
                    dataType: "json",
                    success: function (result) {
                        $.each(result, function () {
                            $('#nacionales').append($("<h1></h1>").attr("value", 
                            this.titulo).text(this.titulo));
                            $('#nacionales').append($("<p></p>").attr("value", 
                            this.parrafo).text(this.parrafo));
					});  
                },
                    error: function (xhr, status, error) {
                        console.log("No ha sido posible cargar las opciones.");
                    }
                });
            break;

            case "Deporte":
                $('#container_deporte').toggleClass('d-none');

                $.ajax({
                    type: "POST",
                    url: "deportes.json",
                    contentType: "application/json; charset=utf-8",
                    data: null,
                    dataType: "json",
                    success: function (result) {
                        $.each(result, function () {
							$('#deportes').append($("<h1></h1>").attr("value", 
                            this.titulo).text(this.titulo));
                            $('#deportes').append($("<p></p>").attr("value", 
                            this.parrafo).text(this.parrafo));
				        });  
                    },
                        error: function (xhr, status, error) {
                            console.log("No ha sido posible cargar las opciones.");
                }
                });
            break;
            case "Espectaculo":
                $('#container_espectaculo').toggleClass('d-none');

                $.ajax({
                    type: "POST",
                    url: "espectaculo.json",
                    contentType: "application/json; charset=utf-8",
                    data: null,
                    dataType: "json",
                    success: function (result) {
                        $.each(result, function () {
							$('#espectaculo').append($("<h1></h1>").attr("value", 
                            this.titulo).text(this.titulo));
                            $('#espectaculo').append($("<p></p>").attr("value", 
                            this.parrafo).text(this.parrafo));
				        });  
                    },
                        error: function (xhr, status, error) {
                            console.log("No ha sido posible cargar las opciones.");
                }
                });
            break;
        }


       
    });
});

