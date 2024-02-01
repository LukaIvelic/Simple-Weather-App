import { fetchWeather } from "./FetchWeather";

export async function fetchLocalWeather(){
    var res = await fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=0e920c1543974f678b31ce48b50006b4');
    var data = await res.json();
    
    if(data["city"] === undefined) {
        return undefined;
    } else {
        return (await fetchWeather(data["city"].name));
    }
}