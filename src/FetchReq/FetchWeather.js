import { DateOffset } from '../Handlers/GetDateOffset';
import { updateWeatherValues } from '../Handlers/UpdateWeatherValues';

export async function fetchWeather(city) {
    var resCurr = await fetch("http://api.weatherapi.com/v1/current.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&aqi=no");
    var dataCurr = await resCurr.json();

    var resFore = await fetch("http://api.weatherapi.com/v1/forecast.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&aqi=no");
    var dataFore = await resFore.json();

    var resFutr = await fetch("http://api.weatherapi.com/v1/future.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&dt=" + DateOffset(1));
    var dataFutr = await resFutr.json();

    if(dataCurr["location"] === undefined){
        return undefined;
    } else {
        updateWeatherValues([dataCurr, dataFore, dataFutr]);
        return [dataCurr, dataFore, dataFutr];
    }
}