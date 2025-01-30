document.addEventListener("DOMContentLoaded", () => {
  const temperature = 32;
  const windSpeed = 20; 
  const unit = "C"; 

  function calculateWindChill(temp, windSpeed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
  }

  function displayWindChill(temp, windSpeed, unit = "C") {
    const isViable =
      (unit.toUpperCase() === "C" && temp <= 10 && windSpeed > 4.8) ||
      (unit.toUpperCase() === "F" && temp <= 50 && windSpeed > 3);

    if (isViable) {
      return calculateWindChill(temp, windSpeed);
    } else {
      return "N/A";
    }
  }

  const windChillValue = displayWindChill(temperature, windSpeed, unit);

  const weatherTable = document.querySelector(".weather-table tbody");
  const rows = weatherTable.querySelectorAll("tr");

  rows[0].querySelector(".weather-value").textContent = `${temperature} °${unit}`;
  rows[2].querySelector(".weather-value").textContent = `${windSpeed} km/h`;
  rows[3].querySelector(".weather-value").textContent = `${windChillValue} °${unit}`;
});
