import {createSlice} from "@reduxjs/toolkit";
import { combineReducers} from '@reduxjs/toolkit';




export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice

/*export const store = configureStore({
  reducer: authSlice.reducer,

});
import * as actionTypes from '../constants/cartConstants';

export const cartReducer= (state={ cartItems:[]},action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item=action.payload;

            const existItem= state.cartItems.find((x)=>x.productId === item.product);

            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x)=>
                    x.product===existItem.product ? item : x
                    ),
                };
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item]
                };
            }
            case actionTypes.REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems: state.cartItems.filter((x)=>x.product !== action.payload)
                }
                default:
                    return state;
    }
}

*/