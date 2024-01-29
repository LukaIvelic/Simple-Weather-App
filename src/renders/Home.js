import '../stylesheets/Home.css'
import { getCity } from '../handlers/GetCity';

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

    var lat = 0, lng = 0;
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
        });

    }else{
        console.error("Geolocation is not supported by this browser.")
    }
    
    var greetingAttributes = {
        color: 'red',
        time: 'Morning',
        city: getCity((lat !== 0 ? lat : 0), (lng !== 0 ? lng : 0))
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
    
    var greeting = <>
        <h1>
            Good {greetingAttributes.time}, &nbsp;
            <span style={{ color: greetingAttributes.color }}>
                {greetingAttributes.city}
            </span>
            !
        </h1>
    </>
    
    return(
        <>
            {header}
            {greeting}
        </>
    );
}

export default Home;