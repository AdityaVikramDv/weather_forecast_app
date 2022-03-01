const API_KEY = "c2c63597e519b71b88b851fae230c15c";
import axios from 'axios';


const ROOT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function Fetch_Weather (cityName)
{
  let URL = `${ROOT}&q=${cityName},in`;
  const request = axios.get(URL);
  return {
    type:FETCH_WEATHER,
    payload: request
  }
}
