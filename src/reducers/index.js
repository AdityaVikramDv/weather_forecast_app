import { combineReducers } from 'redux';
import WeatherData from './weather_reducer';
const rootReducer = combineReducers({
  weather : WeatherData
});

export default rootReducer;
