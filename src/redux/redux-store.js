import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messageReducer,
    usersPage : usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;


export default store;