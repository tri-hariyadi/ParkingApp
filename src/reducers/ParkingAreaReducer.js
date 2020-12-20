import { PARKING_AREA_LIST } from '../actions';

const initialState = {
  getListParkingAreaData: false,
  getListParkingAreaLoading: false,
  getListParkingAreaError: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PARKING_AREA_LIST:
      return {
        ...state,
        getListParkingAreaData: action.payload.data,
        getListParkingAreaLoading: action.payload.loading,
        getListParkingAreaError: action.payload.errorMessage,
      }
  
    default:
      return state;
  }
}
