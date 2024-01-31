//#region Manual imports
import './HomePage.css'
//#endregion

export default function HomePageLayout() {

    var header = <>
        <header>
            <h3>Weather App</h3>
        </header>
    </>;

    var cityName = <>
        <div id='region-display'>
            <h1 id='city-name'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="location">
                    <g fill="none" fill-rule="evenodd" stroke="black" stroke-linecap="round" 
                       stroke-linejoin="round" stroke-width="1.5" transform="translate(3.5 2)">
                        <path d="M0.739130438,8.39130439 C0.753537867,4.15071799 4.2028919,0.72472301 8.4434783,
                                 0.739085164 C12.6840647,0.753537867 16.1100597,4.2028919 16.0956975,8.4434783 L16.0956975,
                                 8.53043483 C16.0434783,11.2869566 14.5043479,13.8347827 12.6173914,15.826087 C11.5382412,
                                 16.9467164 10.3331375,17.9388114 9.026087,18.7826088 C8.67659293,19.0849173 8.15818976,
                                 19.0849173 7.80869569,18.7826088 C5.86019813,17.5143538 4.15006533,15.9131279 2.75652175,
                                 14.052174 C1.51448066,12.4293903 0.809295599,10.4597355 0.739130438,8.41739135 L0.739130438,
                                 8.39130439 Z">
                        </path>
                        <circle cx="8.417" cy="8.539" r="2.461"></circle>
                    </g>
                </svg>
                &nbsp;
                Zagreb, <span id='country-name'>Croatia</span></h1>
        </div>
    </>;

    var weatherInfoSum = <>
        <h2 id='weather-sum'>Currently Sunny, 32&deg;</h2>
    </>;

    /*
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
    */

    var weatherInfoToday = <>
        <label htmlFor='weatherInfoToday' id='weather-today'>Today's Weather</label>
        <div id='weather-today-tab'>
            <div id='feels-like' className='info-tab'>
                <label htmlFor='feels-like' className='weather-label'>Feels like:</label>
                <h3>35&deg;</h3>
            </div>

            <div id='gust-speed' className='info-tab'>
                <label htmlFor='gust-speed' className='weather-label'>Gust speed:</label>
                <h3>12 km/h</h3>
            </div>

            <div id='wind-speed' className='info-tab'>
                <label htmlFor='wind-speed' className='weather-label'>Wind speed:</label>
                <h3>1 km/h</h3>
            </div>

            <div id='humidity' className='info-tab'>
                <label htmlFor='humidity' className='weather-label'>Humidity:</label>
                <h3>55%</h3>
            </div>

            <div id='uv-index' className='info-tab'>
                <label htmlFor='uv-index' className='weather-label'>UV index:</label>
                <h3>11</h3>
            </div>
        </div>
    </>;

    var qrCode = <>
        <label htmlFor='qrCode' id='qr-label'>API used: </label>
        <img src={require('../Media/qr.png')} id='qr-code' alt='QR Code'></img>
    </>;

    return (<>
        {header}
        {weatherInfoSum}
        {cityName}
        {weatherInfoToday}
        {qrCode}
    </>);
}