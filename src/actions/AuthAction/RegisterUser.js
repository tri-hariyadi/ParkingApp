import axios from 'axios';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError
} from '../../utils';
import { API_URL, API_TIMEOUT, API_HEADER } from '../../config/constants';

export const REGISTER_USER = 'REGISTER_USER';

const RegisterUser = (values) => {
  const data = {
    username: values.username,
    email: values.email,
    phonenumber: values.phonenumber,
    password: values.password
  }

  return async (dispatch) => {
    dispatchLoading(dispatch, REGISTER_USER);
    await axios({
      method: 'post',
      url: API_URL + 'register',
      headers: API_HEADER,
      timeout: API_TIMEOUT,
      data: data
    }).then(res => {
      if (!res.data.data || res.data.status !== 200) {
        dispatchError(dispatch, REGISTER_USER, res.data.message);
      } else {
        dispatchSuccess(dispatch, REGISTER_USER, res.data.data);
      }
    }).catch(err => {
      dispatchError(dispatch, REGISTER_USER, err.message);
    })
  }
}

export default RegisterUser;
