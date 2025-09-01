export const login = (credentials) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  try {
    // Simulate API call
    if (credentials.username === 'admin' && credentials.password === 'password123') {
      const user = { id: 1, username: 'admin' };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      return true;
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  return { type: 'LOGOUT' };
};

// Add action to check authentication status on app load
export const checkAuthStatus = () => (dispatch) => {
  const user = localStorage.getItem('user');
  if (user) {
    dispatch({ type: 'LOGIN_SUCCESS', payload: JSON.parse(user) });
  }
};