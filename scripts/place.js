const lastModified = document.lastModified;
const footerElement = document.getElementById('lastModified');
footerElement.textContent = `${new Date().getFullYear()} - ${lastModified}`;

const temperature = 8; 
const windSpeed = 12; 

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.getElementById('windchill');
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(
            temperature,
            windSpeed
        )} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

window.onload = displayWindChill;
