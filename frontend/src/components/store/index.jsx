
import { combineReducers, configureStore, applyMiddleware, createStore } from '@reduxjs/toolkit';
import authSlice from '../Redux/authSlice';
import cartSlice from "../Redux/cartSlice";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import {cartReducer} from '.././Redux/reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from '../Redux/reducers/productReducers';

const reducer= combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
})

const middlware = [thunk]

const store= configureStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlware))
)

export default store