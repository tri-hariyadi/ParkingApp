import { GET_VEHICLE, REGISTER_VEHICLE } from '../actions';

const initialState = {
  getVehicleData: false,
  getVehicleLoading: false,
  getVehicleError: false,

  registerVehicleData: false,
  registerVehicleLoading: false,
  registerVehicleError: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VEHICLE:
      return {
        ...state,
        getVehicleData: action.payload.data,
        getVehicleLoading: action.payload.loading,
        getVehicleError: action.payload.errorMessage,
      }
    case REGISTER_VEHICLE:
      return {
        ...state,
        registerVehicleData: action.payload.data,
        registerVehicleLoading: action.payload.loading,
        registerVehicleError: action.payload.errorMessage,
      }

    default:
      return state;
  }
}
