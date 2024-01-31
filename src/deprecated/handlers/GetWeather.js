import { useState, useEffect } from 'react';

/**
 * @deprecated Used in the first try to program with React.js
 */
export function GetWeather(city){	
    const [current, setCurrent] = useState([])//current.json
    const [forecast, setForecast] = useState([]); //forecast.json
    const [future, setFuture] = useState([]); //future.json
    
    
    useEffect(()=>{
        fetch("http://api.weatherapi.com/v1/current.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&aqi=no")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setCurrent(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    useEffect(() => {
        fetch("http://api.weatherapi.com/v1/forecast.json?key=53e37b50425a4f24a16190827242901&q=" + city + "&aqi=no")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setForecast(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    var date = new Date();
    var stringDate = `${date.getFullYear().toString()}-${(date.getMonth()+2).toString()}-${date.getDate().toString()}`;
    useEffect(() => {
        fetch("http://api.weatherapi.com/v1/future.json?key=53e37b50425a4f24a16190827242901&q=Culebra&dt=" + stringDate)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            setFuture(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    
    return [current, forecast, future];
}