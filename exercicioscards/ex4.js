function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerText = "Por favor, insira números válidos.";
        return;
    }

    let res;
    switch (operacao) {
        case "soma":
            res = num1 + num2;
            break;
        case "subtracao":
            res = num1 - num2;
            break;
        case "multiplicacao":
            res = num1 * num2;
            break;
        case "divisao":
            if (num2 === 0) {
                resultado.innerText = "Não é possível dividir por zero.";
                return;
            }
            res = num1 / num2;
            break;
        default:
            resultado.innerText = "Selecione uma operação válida.";
            return;
    }
    resultado.innerText = `Resultado: ${res}`;
}
