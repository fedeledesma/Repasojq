$(document).ready(function() {

    $("#calc").click(function(){

        let valor1 = $("#valor1").val() 
        valor1 = parseFloat(valor1)

        let valor2 = $("#valor2").val()
        valor2 = parseFloat(valor2)

        let valor3 = $("#valor3").val()

        let resultado = 0



        if(valor3 == "sum"){   
        resultado = valor1 + valor2;
        $("#resultado").text(resultado)
        }

    else if(valor3 == "rest"){
        resultado = valor1 - valor2;
        $("#resultado").text(resultado)
    }

    else if(valor3 == "div"){
        resultado = valor1 / valor2;
        $("#resultado").text(resultado)
    }

    else if(valor3 == "mult"){
        resultado = valor1 * valor2;
        $("#resultado").text(resultado)
    }

    else if(valor3 == "pot"){
        resultado = valor1 ** valor2;
        $("#resultado").text(resultado)
    }    

    else if(valor3 == "raiz"){
        resultado = Math.sqrt(valor1)
        $("#resultado").text(resultado)
    }    
    })

});