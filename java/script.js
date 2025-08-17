document
    .getElementById("energyForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const watts = parseFloat(document.getElementById("watts").value);
        const resultDiv = document.getElementById("result");

        if (isNaN(watts) || watts <= 0) {
            resultDiv.textContent = "Por favor, ingrese un número válido de vatios.";
            return;
        }

        // Factores de conversión (valores aproximados)
        const solarEquivalent = (watts / 400).toFixed(2); // 1 panel solar genera 400 W
        const windEquivalent = (watts / 2000).toFixed(2); // 1 turbina eólica pequeña genera 2000 W
        const hydroEquivalent = (watts / 10000).toFixed(2); // Microcentral hidroeléctrica genera 10,000 W
        const biofuelEquivalent = (watts / 30).toFixed(2); // 1 litro de biocombustible produce 30 W (aproximado)
        const geothermalEquivalent = (watts / 5000).toFixed(2); // Una planta geotérmica pequeña genera 5000 W

        resultDiv.innerHTML = ` 
        <p>Con un consumo de <strong>${watts} W</strong>, equivale a:</p>
    <ul>
        <li><strong>${solarEquivalent}</strong> paneles solares (400 W/panel)</li>
        <li><strong>${windEquivalent}</strong> turbinas eólicas pequeñas (2000 W/turbina)</li>
        <li><strong>${hydroEquivalent}</strong> microcentrales hidroeléctricas (10,000 W/microcentral)</li>
        <li><strong>${biofuelEquivalent}</strong> litros de biocombustible (30 W/litro)</li>
        <li><strong>${geothermalEquivalent}</strong> plantas geotérmicas pequeñas (5000 W/planta)</li>
    </ul>`;
    });