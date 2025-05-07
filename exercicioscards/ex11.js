function simularCaixa() {
    let valor = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
    }

    let notas = [100, 50, 10, 1];
    let qtdNotas = {};

    for (let nota of notas) {
        qtdNotas[nota] = Math.floor(valor / nota);
        valor %= nota;
    }

    resultado.innerHTML = `Notas de R$100: ${qtdNotas[100]}<br>Notas de R$50: ${qtdNotas[50]}<br>Notas de R$10: ${qtdNotas[10]}<br>Notas de R$1: ${qtdNotas[1]}`;
}
