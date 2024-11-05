import { openWeatherWMOToEmoji } from '@akaguny/open-meteo-wmo-to-emoji';

const getCurrentWeather = async (lat, long, setCurrentWeather, location) => {
    try {
        const query = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code,wind_speed_10m&forecast_days=1`;
        const response = await fetch(query);
        const data = await response.json();
        const desc = openWeatherWMOToEmoji(data.current.weather_code);
        setCurrentWeather({
            location: '',
            temp: `${data.current.temperature_2m} `,
            description: `${desc.description} ${desc.value}`,
            windSpeed: `${data.current.wind_speed_10m} `
        });
    } catch (error) {
        alert('Error fetching weather data');
        setCurrentWeather({
            location: '',
            temp: 'N/A',
            description: 'N/A',
            windSpeed: 'N/A',
        });
    }
};

export default getCurrentWeather;