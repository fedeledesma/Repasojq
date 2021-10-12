$(document).ready(function() {

    $("#calc").click(function(){
        let valor1 = $("#valor1").val() 
        valor1 = parseFloat(valor1)
        let valor2 = $("#valor2").val()
        valor2 = parseFloat(valor2)
        let valor3 = $("#valor3").val()
        let resultado
        if(valor3 == "sum"){
        resultado = valor1 + valor2;
        console.log(resultado)
        }

    else if(valor3 == "rest"){
        resultado = valor1 - valor2;
        console.log(resultado)
    }

    else if(valor3 == "div"){
        resultado = valor1 / valor2;
        console.log(resultado)
    }

    else if(valor3 == "mult"){
        resultado = valor1 * valor2;
        console.log(resultado)
    }


        
    })
    


});