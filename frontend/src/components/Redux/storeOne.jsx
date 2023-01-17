import {createStore, combineReducers, applyMiddleware} from 'react'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const storeOneContext = React.createContext();


const reducer= combineReducers({

})

const middleware=[thunk];

const storeOne = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default storeOne;