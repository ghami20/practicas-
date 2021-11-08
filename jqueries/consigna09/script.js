$(document).ready(function () {
    setInterval(muestraReloj, 1000);
  });


function muestraReloj() {
  var now = new Date();    
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
  var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

  var date = now.getDate();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDay();
   
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hour = ( hour < 10 )? "0"+hour : hour;
  minute = ( minute < 10 )? "0"+minute : minute;
  second = ( second < 10 )? "0"+second : second;


  var datetime = ''+days[day]+' '+months[month]+' '+date+' '+year+' '+ hour +':'+ minute +':'+ second;

  $("#reloj").html(datetime);
}