function muestraReloj() {
  var fechaHora = new Date();
  var dia = fechaHora.getDay();
  var mes = fechaHora.getMonth();
  var año = fechaHora.getUTCFullYear();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();

    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }

     // document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
     document.getElementById("hora").innerHTML = "Hora:"+''+ horas+':'+minutos+':'+segundos;
     document.getElementById("dia").innerHTML= "Fecha:" +''+ dia+ '/'+mes+'/'+año ; 
}

window.onload = function() {
  setInterval(muestraReloj, 1000);
}