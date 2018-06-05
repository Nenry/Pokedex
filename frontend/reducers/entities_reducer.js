import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';

export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
});
