import {createStore,combineReducers} from "redux";
import postReducer from "./postReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import dropDownReducer from "./dropDownReducer";

const rootReducer = combineReducers({
    postReducer,
    dropDownReducer
})

const store = createStore(rootReducer,composeWithDevTools())

export  default store