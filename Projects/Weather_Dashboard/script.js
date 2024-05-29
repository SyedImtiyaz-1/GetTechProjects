document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const cityName = document.getElementById('city-name');
    const dateTime = document.getElementById('date-time');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();
            if (data.cod === 200) {
                updateUI(data);
            } else {
                alert('City not found');
            }
        } catch (error) {
            console.error('Error fetching the weather data', error);
        }
    };

    const updateUI = (data) => {
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        dateTime.textContent = new Date().toLocaleString();
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temperature.textContent = `${data.main.temp} °C`;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    };

    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeatherData(city);
        }
    });

    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    // Optional: Fetch weather data for the current location on page load
    const fetchWeatherForCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
                    const data = await response.json();
                    if (data.cod === 200) {
                        updateUI(data);
                    } else {
                        alert('Unable to fetch weather data for your location');
                    }
                } catch (error) {
                    console.error('Error fetching the weather data for current location', error);
                }
            });
        } else {
            alert('Geolocation is not supported by this browser');
        }
    };

    fetchWeatherForCurrentLocation();
});
