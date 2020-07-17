import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk'

const initialState = {}

const reducer = combineReducers({

})


const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
)

export default store;