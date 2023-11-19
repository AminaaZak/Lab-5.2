document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    // Замініть {city name} та {API key} на власні значення
    const cityName = 'Lviv';
    const apiKey = '9841298d4e067667175a77ed90b20a23';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;


    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayWeather(data) {

    console.log(data);
    const location = data.name;
    const temperatureK = data.main.temp;
    const temperatureC = Math.round(temperatureK-273.15);
    const feelslikeK = data.main.feels_like;
    const feelslikeC = Math.round(feelslikeK-273.15);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
        <p>Місто: ${location}</p>
        <p>Температура: ${temperatureC} °C</p>
        <p>Відчувається як: ${feelslikeC} °C</p>
        <p>Вологість: ${humidity}%</p>
        <p>Швидкість вітру: ${windSpeed} м/с</p>
    `;
}
