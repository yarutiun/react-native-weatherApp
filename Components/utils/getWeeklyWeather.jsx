import { openWeatherWMOToEmoji } from '@akaguny/open-meteo-wmo-to-emoji';

const getWeeklyWeather = async (lat, long, setWeeklyWeather, location, setWeeklyChart) => {
    try {
        let date = [], icon = [], min = [], max = [], description = [];
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
        let dat;
        for (let i = 0; i < 7; i++) {
            description.push(openWeatherWMOToEmoji(data.hourly.weather_code[a]).description); // Using the last hour's weather code for simplicity
            icon.push(openWeatherWMOToEmoji(data.hourly.weather_code[a]).value); // Using the last hour's weather code for simplicity
            dat = data.hourly.time[a].slice(0, -6).slice(5).replace('-', '/');

            date.push(dat); // Trimming to get the date only
            a += 24;
        }

        // Setting the weekly weather data
        setWeeklyWeather({
            location: location || '',
            date: date,
            min: min,
            max: max,
            description: description,
            icon: icon
        });

        // Preparing data for the weekly chart
        const minData = date.map((day, index) => ({ x: day, y: min[index] }));
        const maxData = date.map((day, index) => ({ x: day, y: max[index] }));

        setWeeklyChart({
            minData: minData, // Array of {x, y} for min temperatures
            maxData: maxData  // Array of {x, y} for max temperatures
        });

    } catch (error) {
        console.error('Error fetching weekly weather data:', error);
        setWeeklyWeather({
            location: location || '',
            date: [],
            min: [],
            max: [],
            description: []
        });
        setWeeklyChart({ minData: [], maxData: [] });
    }
};

export default getWeeklyWeather;
