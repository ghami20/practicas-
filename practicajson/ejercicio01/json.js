$(document).ready(()=>{
    $('#provincias').change(function (event) {
        //console.log($("#provincias").val());
        var valor = $("#provincias option:selected").val()
        $('#container_municipios').addClass('d-none');
        $('#container_comunas').addClass('d-none');
        switch(valor){
            case "buenos aires":
                $('#container_municipios').toggleClass('d-none');
                $.ajax({
                    type: "POST",
                    url: "municipios.json",
                    contentType: "application/json; charset=utf-8",
                    data: null,
                    dataType: "json",
                    success: function (result) {
                        $.each(result, function () {
							$('#municipios').append($("<option></option>").attr("value", 
                            this.municipio).text(this.municipio));
					});  
                },
                    error: function (xhr, status, error) {
                        console.log("No ha sido posible cargar las opciones.");
                    }
                });
            break;

            case "CABA":
                $('#container_comunas').toggleClass('d-none');

                $.ajax({
                    type: "POST",
                    url: "comunas.json",
                    contentType: "application/json; charset=utf-8",
                    data: null,
                    dataType: "json",
                    success: function (result) {
                        $.each(result, function () {
							$('#comunas').append($("<option></option>").attr("value", 
                            this.comuna).text(this.comuna));
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

