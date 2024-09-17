import { openWeatherWMOToEmoji } from '@akaguny/open-meteo-wmo-to-emoji';

const getTodayWeather = async (lat, long, setTodayWeather, location) => {
    try {
        // Initialize the arrays
        let hours = [], temp = [], description = [], windSpeed = [];

        // Fetch data from the API
        const query = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code,wind_speed_10m&forecast_days=1`;
        const response = await fetch(query);
        const data = await response.json();

        // Iterate over the hourly data arrays (time, temperature_2m, etc.)
        for (let i = 0; i < 24; i++) {
            hours.push(data.hourly.time[i].slice(11)); // Remove the last 6 characters
            temp.push(data.hourly.temperature_2m[i]); // Access temperature
            description.push(openWeatherWMOToEmoji(data.hourly.weather_code[i]).description); // Convert WMO code to emoji/description
            windSpeed.push(data.hourly.wind_speed_10m[i]); // Access wind speed
        }

        // Set the state with the accumulated weather data
        setTodayWeather({
            location: location || '', // You can pass the location or leave it blank
            hours: hours,
            temp: temp,
            description: description,
            windSpeed: windSpeed,
        });

    } catch (error) {
        console.error('Error fetching today\'s weather data:', error);
        alert('Error fetching today\'s weather data');
        setTodayWeather({
            location: location || '',
            hours: [],
            temp: [],
            description: [],
            windSpeed: [],
        });
    }
};

export default getTodayWeather;