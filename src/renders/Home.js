import '../stylesheets/Home.css'
import { GetCity } from '../handlers/GetCity';
import { GetWeather } from '../handlers/GetWeather';

function Home(){

    var header = <>
        <header>
            <h3>Weather App</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Source</li>
            </ul>
        </header>
    </>;
    
    var greetingAttributes = {
        color: 'red',
        time: 'Morning',
        city: GetCity()
    };
    
    var date = new Date().getHours();
    if(date < 12) {
        greetingAttributes.color = 'cornflowerblue';
        greetingAttributes.time = 'Morning';
    }
    else if (date <= 20) {
        greetingAttributes.color = 'coral';
        greetingAttributes.time = 'Afternoon';
    }
    else{
        greetingAttributes.color = 'navy';
        greetingAttributes.time = 'Evening';
    }

    var weather = GetWeather("Zagreb");

    let allTemp = [];
    for (let i = 0; i < 6; i++){
        let info = {
            index: i,
            temp: weather[1].forecast?.forecastday[0]?.hour[i].temp_c
        };
        allTemp.push(info);
    }

    const listItems = allTemp.map(info =>
    <li key={info.index}>
            {(info.index).toLocaleString()}:00&nbsp;<br></br>{info.temp}&deg;
        </li>
    );
    
    // console.log(weather[0].location)

    var location = {
        cityName: weather[1].location?.name,
        region: weather[1].location?.country
    };

    var currentWeatherInfo = {
        feelsLikeC: weather[1].current?.feelslike_c,
        gustKph: weather[1].current?.gust_kph,
        windKph: weather[1].current?.wind_kph,
        humidity: weather[1].current?.humidity,
        isDay: weather[1].current?.is_day,
        tempC: weather[1].current?.temp_c,
        uvIndex: weather[1].current?.uv,
        condition: weather[1].current?.condition.text,
    };

    var showWeather=<>
        <div id='show-weather'>
            <div id='display-city' style={{color: greetingAttributes.color}}>
                {location.cityName}, <span style={{fontSize:"1rem"}}>{location.region}</span><br></br>
                <p>Changes of rain: {currentWeatherInfo.humidity}%</p>
            </div>
            <div id='display-temp'>
                {currentWeatherInfo.condition} {currentWeatherInfo.feelsLikeC}&deg;
            </div>
            <div id='display-today-forecast'>
                <label htmlFor='display-today-forecast'>Tommorow's forecast</label>
                <ul>
                    {listItems}
                </ul>  
            </div>
        </div>
    </>;

    return(
        <>
            {header}
            {/* {greeting} */}
            {showWeather}
        </>
    );
}

export default Home;