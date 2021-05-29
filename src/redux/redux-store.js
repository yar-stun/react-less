import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messageReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;