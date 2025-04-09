document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (temperatureInput === '' || isNaN(temperatureInput)) {
        resultDiv.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unit;

    // Conversion logic
    switch (unitSelect) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
            unit = 'Fahrenheit';
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            unit = 'Celsius';
            break;
        case 'Kelvin':
            // Convert Kelvin to Celsius first
            const celsiusFromKelvin = temperature - 273.15;
            convertedTemperature = (celsiusFromKelvin * 9/5) + 32; // Celsius to Fahrenheit
            unit = 'Fahrenheit';
            break;
        default:
            resultDiv.textContent = 'Invalid unit selected.';
            return;
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${unit.charAt(0)}`;
});