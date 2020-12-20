import axios from 'axios';
import { API_URL, API_TIMEOUT, API_HEADERS_AUTH } from '../../config/constants';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError
} from '../../utils';

export const GET_VEHICLE = 'GET_VEHICLE';

const GetVehicle = (userId) => {
  const data = {
    userId: userId
  }
  return (dispatch) => {
    dispatchLoading(dispatch, GET_VEHICLE);
    axios({
      method: 'get',
      url: API_URL + 'saldo/get_saldo',
      headers: API_HEADERS_AUTH,
      timeout: API_TIMEOUT,
      data: data
    }).then(res => {
      if (!res.data.data || res.data.status !== 200) {
        dispatchError(dispatch, GET_VEHICLE, res.data.message);
      } else {
        dispatchSuccess(dispatch, GET_VEHICLE, res.data.data);
      }
    }).catch(err => {
      console.log('Ini error action => ', err);
      dispatchError(dispatch, GET_VEHICLE, err)
    })
  }
}

export default GetVehicle;
