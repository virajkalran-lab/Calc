let expression = "";

function appen(input) {
    expression += input;
    document.getElementById("display").value = expression;
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "0";
}

function ans() {
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
        expression = result.toString(); // allow chaining
    } catch (error) {
        document.getElementById("display").value = "Error";
        expression = "";
    }
}