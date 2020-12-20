import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import AuthReducer from './AuthReducer';
import ParkingAreaReducer from './ParkingAreaReducer';
import VehicleReducer from './VehicleReducer';

const rootReducer = combineReducers({
  AuthReducer,
  ParkingAreaReducer,
  VehicleReducer,
  
  form
});

export default rootReducer;
