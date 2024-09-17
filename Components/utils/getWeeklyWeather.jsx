import { openWeatherWMOToEmoji } from '@akaguny/open-meteo-wmo-to-emoji';

const getWeeklyWeather = async (lat, long, setWeeklyWeather, location) => {
    try {
        let date = [], min = [], max = [], description = [];
        let temp = [];

        const query = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code,wind_speed_10m`;
        const response = await fetch(query);
        const data = await response.json();

        let p = 0;
        for (let i = 0; i < 7; i++) {
            temp = [];
            for (let j = 0; j < 24; j++) { // Loop for 24 hours in a day
                temp.push(data.hourly.temperature_2m[p]);
                p++;
            }
            min.push(Math.min(...temp));
            max.push(Math.max(...temp));
        }

        let a = 0;
        for (let i = 0; i < 7; i++) {
            description.push(openWeatherWMOToEmoji(data.hourly.weather_code[a]).description); // Using the last hour's weather code for simplicity
            date.push(data.hourly.time[a].slice(0, -6));
            a += 24;
        }

        setWeeklyWeather({
            location: location || '',
            date: date,
            min: min,
            max: max,
            description: description
        });
    } catch (error) {
        console.error('Error fetching weekly weather data:', error);
        alert('Error fetching weekly weather data');
        setWeeklyWeather({
            location: location || '',
            date: [],
            min: [],
            max: [],
            description: []
        });
    }
};

export default getWeeklyWeather;