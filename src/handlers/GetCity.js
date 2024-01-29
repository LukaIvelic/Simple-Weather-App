import { useState, useEffect } from 'react';

export function GetCity() {
    
    var [city, setCity] = useState("");
    fetch('https://api.geoapify.com/v1/ipinfo?&apiKey=0e920c1543974f678b31ce48b50006b4')
        .then(res => res.json())
        .then(data => setCity(data["city"]?.name))
        .catch(err => console.log(err.message));

    return city;
}