import { openWeatherWMOToEmoji } from '@akaguny/open-meteo-wmo-to-emoji';


const getCurrentWeather = async (lat, long, setCurrentWeather) => {
    const query=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,weather_code,wind_speed_10m&forecast_days=1`;
    const response = await fetch(query);
    const data = await response.json();
    setCurrentWeather({
        location: '',
        temp: data.current.temperature_2m,
        description: openWeatherWMOToEmoji(data.current.weather_code),
        windSpeed: data.current.wind_speed_10m
    });
};

export default getCurrentWeather;