function converterTemperatura() {
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let escala = document.getElementById("escala").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(temperatura)) {
        resultado.innerText = "Por favor, insira um valor de temperatura válido.";
        return;
    }

    let fahrenheit, kelvin;

    if (escala === "celsius") {
        fahrenheit = (temperatura * 9/5) + 32;
        kelvin = temperatura + 273.15;
        resultado.innerText = `${temperatura}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (escala === "fahrenheit") {
        celsius = (temperatura - 32) * 5/9;
        kelvin = celsius + 273.15;
        resultado.innerText = `${temperatura}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (escala === "kelvin") {
        celsius = temperatura - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        resultado.innerText = `${temperatura}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }
}
