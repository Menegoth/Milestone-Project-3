import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart= (id,qty)=> async (dispatch, getState) => {
    const {data} = await axios.get(`https://milestone-project-3-backend.azurewebsites.net/posts${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name:data.name,
            image: data.image,
            price:data.price,
        }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart= () => (dispatch, getState) => {
    dispatch({type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}