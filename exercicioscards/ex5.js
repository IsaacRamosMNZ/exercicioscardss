function verificarIdade() {
    let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(anoNascimento) || anoNascimento > new Date().getFullYear()) {
        resultado.innerText = "Por favor, insira um ano válido.";
        return;
    }

    let idade = new Date().getFullYear() - anoNascimento;
    let status = idade < 18 ? "Menor de idade" : idade < 60 ? "Adulto" : "Idoso";

    resultado.innerText = `Idade: ${idade} - Status: ${status}`;
}
