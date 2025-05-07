function verificarParOuImpar() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    
    if (numero % 2 === 0) {
      resultado.innerHTML = "O número " + numero + " é PAR.";
    } else {
      resultado.innerHTML = "O número " + numero + " é ÍMPAR.";
    }
  }
  