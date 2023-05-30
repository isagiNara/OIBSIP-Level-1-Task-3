function convertTemperature() {
    var temperature = document.getElementById('temperature').value;
    var celsiusRadio = document.getElementById('celsius');
    var fahrenheitRadio = document.getElementById('fahrenheit');
    var resultElement = document.getElementById('result');

    if (celsiusRadio.checked) {
        var celsius = parseFloat(temperature);
        var fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = temperature + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    } else if (fahrenheitRadio.checked) {
        var fahrenheit = parseFloat(temperature);
        var celsius = (fahrenheit - 32) * 5/9;
        resultElement.textContent = temperature + "°F is equal to " + celsius.toFixed(2) + "°C";
    }
}