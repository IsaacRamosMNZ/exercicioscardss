let timer;
let segundos = 0;

function iniciarCronometro() {
    if (timer) return;

    timer = setInterval(() => {
        segundos++;
        document.getElementById("resultado").innerText = formatarTempo(segundos);
    }, 1000);
}

function pausarCronometro() {
    clearInterval(timer);
    timer = null;
}

function zerarCronometro() {
    clearInterval(timer);
    timer = null;
    segundos = 0;
    document.getElementById("resultado").innerText = "00:00";
}

function formatarTempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}
