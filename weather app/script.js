document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    getWeather(city);
});

async function getWeather(city) {
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Validate that the API actually found the city
        if (!data.nearest_area || data.nearest_area.length === 0) {
            alert("City not found");
            return;
        }

        const areaName = data.nearest_area[0].areaName[0].value.toLowerCase();
        const userInput = city.toLowerCase();

        // If the API's best guess doesn't match the user's input, reject it
        if (!areaName.includes(userInput)) {
            alert("City not found");
            return;
        }

        const current = data.current_condition[0];

        document.getElementById("cityName").textContent = areaName;
        document.getElementById("temperature").textContent = `Temperature: ${current.temp_C}°C`;
        document.getElementById("description").textContent = current.weatherDesc[0].value;

        document.getElementById("weatherResult").classList.remove("hidden");

    } catch (error) {
        alert("Error fetching weather data");
    }
}