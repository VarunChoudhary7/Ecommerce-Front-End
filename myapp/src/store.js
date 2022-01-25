// setting up redux store
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/index"
import thunk from "redux-thunk"

/* Redux thunk: library which allows to handle dispatch asynchronusly */
const initialState = {}
const middlewares = [thunk]

// adding thunk as a middleware
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store