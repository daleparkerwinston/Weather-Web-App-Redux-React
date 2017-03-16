import axios from 'axios';

const API_KEY = '5aed149728961799915b22498118da3a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${ROOT_URL}&q=${cityName},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request // Returning the promise! as the payload
  }
}