import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action ){
  switch(action.type){
    case FETCH_WEATHER:
    let duplicate;
    state.map(city =>{
    if(city.city.name === action.payload.data.city.name){
        duplicate = city.city.name;
     }
    });
  if(!duplicate)
    return [...state,action.payload.data];
  }

  return state;
}
