var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "kilogram" && resultTypeValue === "kilogram") {

        result.value = Number(input.value); 
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {

        result.value = Number(input.value) * 1000; 
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "miligram") {

        result.value = Number(input.value) * 1000000;     
    } else if (inputTypeValue === "kilogram" && resultTypeValue === "pounds") {

        result.value = Number(input.value) * 2.2; 
    } else if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {

        result.value = Number(input.value) / 1000; 
    } else if (inputTypeValue === "gram" && resultTypeValue === "gram") {

        result.value = Number(input.value); 
    } else if (inputTypeValue === "gram" && resultTypeValue === "miligram") {

        result.value = Number(input.value) * 1000;     
    } else if (inputTypeValue === "gram" && resultTypeValue === "pounds") {

        result.value = Number(input.value) * 0.0022; 
    } else if (inputTypeValue === "miligram" && resultTypeValue === "kilogram") {

        result.value = Number(input.value) / 1000000; 
    } else if (inputTypeValue === "miligram" && resultTypeValue === "gram") {

        result.value = Number(input.value) / 1000; 
    } else if (inputTypeValue === "miligram" && resultTypeValue === "miligram") {

        num = Number(input.value);   
        result.value = num.toFixed(2);
    } else if (inputTypeValue === "miligram" && resultTypeValue === "pounds") {

        num = Number(input.value) / 453592.37; 
        result.value = num.toFixed(2);
    } else if (inputTypeValue === "pounds" && resultTypeValue === "kilogram") {

        num = Number(input.value) * 0.45359237; 
        result.value = num.toFixed(2);
    } else if (inputTypeValue === "pounds" && resultTypeValue === "gram") {

        num = Number(input.value) * 453.592; 
        result.value = num.toFixed(2);
    } else if (inputTypeValue === "pounds" && resultTypeValue === "miligram") {

        num = Number(input.value) * 453, 592.37;  
        result.value = num.toFixed(2);
    } else if (inputTypeValue === "pounds" && resultTypeValue === "pounds") {

        result.value = Number(input.value); 

    }
}
function clearall(){
    input.value=""
    result.value=""
}