// getTodayWeather.js

import { openWeatherWMOToEmoji } from "@akaguny/open-meteo-wmo-to-emoji";

const getTodayWeather = async (
  lat,
  long,
  setTodayWeather,
  location,
  setTodayChart
) => {
  try {
    // Initialize arrays for weather data
    let dataPoints = [];
    let hours = [];
    let temp = [];
    let description = [];
    let emoji = [];
    let windSpeed = [];

    // Construct API query
    const query = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code,wind_speed_10m&forecast_days=1`;
    
    // Fetch data from the API
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    const data = await response.json();

    // Validate API response
    if (
      !data.hourly ||
      !data.hourly.time ||
      !data.hourly.temperature_2m ||
      !data.hourly.weather_code ||
      !data.hourly.wind_speed_10m
    ) {
      throw new Error("Incomplete data received from API");
    }

    // Process hourly data (first 24 hours)
    for (let i = 0; i < 24; i++) {
      const time = data.hourly.time[i];
      const hour = time.slice(11, 16); // e.g., "14:00"
      const temperature = data.hourly.temperature_2m[i];
      const weatherCode = data.hourly.weather_code[i];
      const windSpeedValue = data.hourly.wind_speed_10m[i];

      // Add all weather data to todayWeather
      hours.push(hour);
      temp.push(temperature);
      description.push(
        openWeatherWMOToEmoji(weatherCode).description
      );
      emoji.push(
         openWeatherWMOToEmoji(weatherCode).value
      );
      windSpeed.push(windSpeedValue);

      // Prepare data for VictoryChart for only specific hours
      if (i % 4 === 0) {
        dataPoints.push({ x: hour, y: temperature });
      }
    }

    // Update todayWeather state with all hourly data
    setTodayWeather({
      location: location || "", // Use the passed 'location'
      hours: hours,
      temp: temp,
      description: description,
      windSpeed: windSpeed,
      emoji: emoji,
    });

    console.log('Today Chart Data:', dataPoints);

    // Update todayChart state with the filtered chart data
    setTodayChart(dataPoints);
  } catch (error) {
    console.error("Error fetching today's weather data:", error);
    alert("Failed to fetch today's weather data. Please try again.");
    // Reset todayWeather state on error
    setTodayWeather({
      location: location || "",
      hours: [],
      temp: [],
      description: [],
      windSpeed: [],
    });
    // Reset todayChart state on error
    setTodayChart([]);
  }
};

export default getTodayWeather;
