import axios from 'axios';
import {
  dispatchLoading,
  dispatchSuccess,
  dispatchError
} from '../../utils';
import { API_URL, API_TIMEOUT, API_HEADER } from '../../config/constants';

export const LOGIN_USER = 'LOGIN_USER';

const loginUser = (values) => {
  const data = {
    username: values.username,
    password: values.password
  }

  return async (dispatch) => {
    dispatchLoading(dispatch, LOGIN_USER);
    await axios({
      method: 'post',
      url: API_URL + 'login',
      headers: API_HEADER,
      timeout: API_TIMEOUT,
      data: data
    }).then(res => {
      if (!res.data.data || res.data.status !== 200) {
        dispatchError(dispatch, LOGIN_USER, res.data.message);
      } else {
        dispatchSuccess(dispatch, LOGIN_USER, res.data.data);
      }
    }).catch(err => {
      dispatchError(dispatch, LOGIN_USER, err.message);
    })
  }
}

export default loginUser;
