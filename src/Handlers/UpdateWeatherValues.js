export function updateWeatherValues(weather){
    var currentWeather = weather[0];
    var forecastWeather = weather[1];
    var futureWeather = weather[2];

    let current = {
        cityName: currentWeather["location"].name,
        country: currentWeather["location"].country,
        condition: currentWeather["current"].condition.text,
        temperature: currentWeather["current"].temp_c,
        feelsLikeTemperature: currentWeather["current"].feelslike_c,
        gustSpeed: currentWeather["current"].gust_kph,
        windSpeed: currentWeather["current"].wind_kph,
        humidity: currentWeather["current"].humidity,
        uvIndex: currentWeather["current"].uv
    };

    document.getElementById('city-name').innerHTML = `${current.cityName}`;
    document.getElementById('country-name').innerHTML = `${current.country}`;
    document.getElementById('weather-sum').innerHTML = `Currently ${current.condition}, ${current.temperature}&deg;`;
    document.getElementById('feels-like-heading').innerHTML = `${current.feelsLikeTemperature}&deg;`;
    document.getElementById('gust-speed-heading').innerHTML = `${current.gustSpeed} km/h`;
    document.getElementById('wind-speed-heading').innerHTML = `${current.windSpeed} km/h`;
    document.getElementById('humidity-heading').innerHTML = `${current.humidity}%`;
    document.getElementById('uv-index-heading').innerHTML = `${current.uvIndex}`;
}