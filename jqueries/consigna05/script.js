
$(document).ready(function () {

    $('#btn').click(function () {
        var mytable = $('#my_tbody');
        var trs = $("tr");
        for(var i = 0 ; i < trs.length;i++){
            if (espar(i+1)){
               trs[i].remove();
                //console.log("llego aca");
            }
        }
    });
    
});

function espar(valor) {
    return valor%2==0;  
}