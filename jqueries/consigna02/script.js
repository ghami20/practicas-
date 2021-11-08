$(document).ready(()=>{

    $(".btn").click((e)=>handleClick(e));

    function handleClick(e){
        var num1 = parseInt($("#num1").val());
        var num2 = parseInt($("#num2").val());
        var res = $("#resultado");
        if(!isNaN(num1) && !isNaN(num2)){
            console.log("es numero");
            switch(e.target.id){
                case "suma":
                    res.html("resultado: " + (num1 + num2));
                    break;
                case "resta":
                    res.html("resultado:" + (num1 - num2));
                    break;
                case "multiplicacion": 
                    res.html("resultado: " + (num1 * num2));
                    break;
                case "division": 
                    res.html("resultado: " + (num1 / num2));
                        break; 
                case "raiz":
                    res.html("resultado: " + (Math.sqrt(num1).toFixed(2)));
                    break;
                case "seno":
                    res.html("resultado: " + (Math.sin(num1).toFixed(2)));
                    break;
                case "coseno":
                    res.html("resultado: " + (Math.cos(num1).toFixed(2)));
                    break;
                case "log":
                    res.html("resultado: " + (Math.log(num1).toFixed(2)));
                    break;
            }
        }else{
            alert(" No es numero ");
        }
    }
});