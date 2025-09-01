export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    // Simulate API call
    if (credentials.username === 'admin' && credentials.password === 'password123') {
      const user = { id: 1, username: 'admin' };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  return { type: LOGOUT };
};