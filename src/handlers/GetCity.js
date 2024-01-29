import cities from 'cities'

export function getCity(lat, lng){
    var result = cities.gps_lookup(lat, lng);
    return result.city;
}