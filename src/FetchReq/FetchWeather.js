export async function updateWeather(inputCity) {
    if (inputCity === "-1") {
        var res = await fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=0e920c1543974f678b31ce48b50006b4');
        var data = await res.json();
        alert(data["city"]?.name);
    } else {
        var result = await getWeather(inputCity);
        console.log(result);
    }
    // return city;
}

async function getWeather(city) {
    var current; //current.json
    var forecast; //forecast.json
    var future; //future.json

    var resCurr = await fetch("http://api.weatherapi.com/v1/current.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&aqi=no");
    var dataCurr = await resCurr.json();

    var resFore = await fetch("http://api.weatherapi.com/v1/forecast.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&aqi=no");
    var dataFore = await resFore.json();

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 2;
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    var day = numDays(year, month);
    var stringDate = `${year.toString()}-${month.toString()}-${day.toString()}`;
    var resFutr = await fetch("http://api.weatherapi.com/v1/future.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&dt=" + stringDate);
    var dataFutr = await resFutr.json();

    current = dataCurr;
    forecast = dataFore;
    future = dataFutr;

    var cityName = current["location"].name;
    var country = current["location"].country;
    var condition = current["current"].condition.text;
    var temperature = current["current"].temp_c;
    var feelsLikeTemperature = current["current"].feelslike_c;
    var gustSpeed = current["current"].gust_kph;
    var windSpeed = current["current"].wind_kph;
    var humidity = current["current"].humidity;
    var uvIndex = current["current"].uv;

    document.getElementById('city-name').innerHTML = `${cityName}`;
    document.getElementById('country-name').innerHTML = `${country}`;
    document.getElementById('weather-sum').innerHTML = `Currently ${condition}, ${temperature}&deg;`;
    document.getElementById('weather-sum').innerHTML = `Currently ${condition}, ${temperature}&deg;`;
    document.getElementById('feels-like-heading').innerHTML = `${feelsLikeTemperature}&deg;`;
    document.getElementById('gust-speed-heading').innerHTML = `${gustSpeed} km/h`;
    document.getElementById('wind-speed-heading').innerHTML = `${windSpeed} km/h`;
    document.getElementById('humidity-heading').innerHTML = `${humidity}%`;
    document.getElementById('uv-index-heading').innerHTML = `${uvIndex}`;

    return [current, forecast, future];
}