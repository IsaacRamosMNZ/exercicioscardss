function gerarTabuada() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerText = "Por favor, insira um número válido.";
        return;
    }

    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = tabuada;
}
