function verificarPalindromo() {
    let texto = document.getElementById("texto").value.trim().toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, '');
    let resultado = document.getElementById("resultado");

    let reverso = texto.split('').reverse().join('');
    if (texto === reverso) {
        resultado.innerText = `"${document.getElementById("texto").value}" é um palíndromo.`;
    } else {
        resultado.innerText = `"${document.getElementById("texto").value}" não é um palíndromo.`;
    }
}
