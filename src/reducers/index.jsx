import { combineReducers } from 'redux';
import SelectCityReducer from './select_city_reducer';

const rootReducer = combineReducers({
  selectedCity: SelectCityReducer
});

export default rootReducer;
