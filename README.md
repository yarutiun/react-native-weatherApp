# Advanced Weather App

This is an advanced weather application built with React Native that provides current, daily, and weekly weather information. Users can search for weather conditions in specific cities, view suggestions, and access weather data through an intuitive interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [API Used](#api-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search Bar**: Users can search for weather information by entering a city name. The search bar is visually appealing, with a clear geolocation button.
- **City Suggestions**: Displays up to 5 suggestions based on the user's input, including city name, region, and country.
- **Current Weather**: Shows the current weather conditions, including temperature, description, icon, and wind speed.
- **Today's Weather**: Provides a temperature curve for the day and a scrollable list of hourly conditions.
- **Weekly Weather**: Displays the weather for the next 7 days, including minimum and maximum temperatures, with a scrollable list of daily conditions.
- **Graphs**: Utilize Victory Charts to visually represent temperature trends for both the current day and the upcoming week.
- **Background Image**: A relevant background image that remains fixed across different tabs.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/advanced_weather_app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd advanced_weather_app
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Run the app on your device or emulator:
   ```
      npx expo start
   ```

## Usage

- Launch the application and enter a city name in the search bar to view weather conditions.
- Click the geolocation button to fetch weather data based on your current location.
- Switch between the \Current,\ \Today,\ and \Weekly\ tabs to view different weather information.

## Screenshots

<img src="./README%20Imgs/current.png" alt="Current Weather"/>
<img src="./README%20Imgs/today.png" alt="Today's Weather"/>
<img src="./README%20Imgs/weekly.png" alt="Weekly Weather"/>
<img src="./README%20Imgs/recomendation.png" alt="Search Bar" width="600" height="400"/>


## API Used

- **Open-Meteo**: Used for fetching weather data (current, hourly, and weekly forecasts).
- **Geolocation**: Utilizes the device's GPS to retrieve the user's current location.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.
