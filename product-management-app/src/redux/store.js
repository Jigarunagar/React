import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;