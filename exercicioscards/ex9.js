function mudarSemaforo(cor) {
    let semaforo = document.getElementById("semaforo");

    if (cor === "vermelho") {
        semaforo.style.backgroundColor = "red";
        semaforo.innerText = "Vermelho - Pare!";
    } else if (cor === "amarelo") {
        semaforo.style.backgroundColor = "yellow";
        semaforo.innerText = "Amarelo - Atenção!";
    } else if (cor === "verde") {
        semaforo.style.backgroundColor = "green";
        semaforo.innerText = "Verde - Pode ir!";
    }
}
