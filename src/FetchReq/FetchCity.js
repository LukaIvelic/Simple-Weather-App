import {fetchWeather} from './FetchWeather'
import {fetchLocalWeather} from './FetchLocalWeather'

export async function updateWeather(inputCity) {
    if (inputCity === "-1") {
        return (await fetchLocalWeather());
    } else {
        return (await fetchWeather(inputCity));
    }
} updateWeather("-1");