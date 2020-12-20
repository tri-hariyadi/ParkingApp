import axios from 'axios';
import { API_URL, API_TIMEOUT, API_HEADERS_MULTIPART } from '../../config/constants';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError
} from '../../utils';

export const REGISTER_VEHICLE = 'REGISTER_VEHICLE';

const RegisterVehicleUser = (values, userId, vehicleLabel, photo) => {
  const data = {
    vehicleLabel: vehicleLabel,
    typeVehicle: values.motoName,
    licensePlate: values.license,
    numberChassis: values.chassis,
    userID: userId
  }
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  // formData.append('file', { ...photo, type: "image/jpeg" });
  formData.append('file', {
    uri: photo,
    type: 'image/jpeg',
    name: 'profile-picture'
  })

  console.log(formData);

  return (dispatch) => {
    dispatchLoading(dispatch, REGISTER_VEHICLE);
    axios({
      method: 'post',
      url: API_URL + 'vehicle/register',
      headers: API_HEADERS_MULTIPART,
      timeout: API_TIMEOUT,
      data: formData
    }).then(res => {
      if (!res.data.data || res.data.status !== 200) {
        console.log(res.data.message);
        dispatchError(dispatch, REGISTER_VEHICLE, res.data.message);
      } else {
        dispatchSuccess(dispatch, REGISTER_VEHICLE, res.data.data);
      }
    }).catch(err => {
      console.log('Ini error action => ', err);
      dispatchError(dispatch, REGISTER_VEHICLE, err)
    })
  }
}

export default RegisterVehicleUser;
