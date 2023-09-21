const apiKey = 'f1a8f8f9d00dce308c37b1168c5cd83c'; // Replace with your actual API key

function fetchWeather(city) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Extract relevant weather information from the response
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Update the HTML elements with the weather data
            document.getElementById('city').textContent = city;
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('conditions').textContent = conditions;
            document.getElementById('humidity').textContent = `${humidity}%`;
            document.getElementById('wind').textContent = `${windSpeed} km/h`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Add event listener to the "Get Weather" button
document.getElementById('get-weather').addEventListener('click', () => {
    const cityInput = document.getElementById('city-input').value;
    if (cityInput) {
        fetchWeather(cityInput);
    } else {
        alert('Please enter a city name.');
    }
});
