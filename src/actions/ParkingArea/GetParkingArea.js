import axios from 'axios';
import { API_URL, API_TIMEOUT, API_HEADERS_AUTH } from '../../config/constants';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError
} from '../../utils';

export const PARKING_AREA_LIST = 'PARKING_AREA_LIST';

const GetParkingArea = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, PARKING_AREA_LIST);
    axios({
      method: 'get',
      url: API_URL + 'parkingarea/list',
      headers: API_HEADERS_AUTH,
      timeout: API_TIMEOUT,
      data: ''
    }).then(res => {
      if (!res.data.data || res.data.status !== 200) {
        dispatchError(dispatch, PARKING_AREA_LIST, res.data.message);
      } else {
        dispatchSuccess(dispatch, PARKING_AREA_LIST, res.data.data);
      }
    }).catch(err => {
      console.log('Ini error action => ',err);
      dispatchError(dispatch, PARKING_AREA_LIST, err)
    })
  }
}

export default GetParkingArea;
