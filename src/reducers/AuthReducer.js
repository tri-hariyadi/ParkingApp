import {
  LOGIN_USER,
  REGISTER_USER
} from '../actions';

const initialState = {
  accessToken: false,
  loginError: false,
  loginLoading: false,

  registerUserData: false,
  registerUserLoading: false,
  registerUserError: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserData: action.payload.data,
        registerUserLoading: action.payload.loading,
        registerUserError: action.payload.errorMessage
      };

    case LOGIN_USER:
      return{
        ...state,
        accessToken: action.payload.data,
        loginLoading: action.payload.loading,
        loginError: action.payload.errorMessage
      };
  
    default:
      return state;
  }
}
