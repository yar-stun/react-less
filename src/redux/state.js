import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, welcome!', likesCount: 12},
                {id: 2, message: 'Hi, fgfgdf!', likesCount: 54},
                {id: 3, message: 'Hi, fgh!', likesCount: 765},
                {id: 4, message: 'Hi, dfgasef!', likesCount: 2}
            ],
            newPostText: 'Текст в поле',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych' },
                {id: 2, name: 'Tolya' },
                {id: 3, name: 'Katya' },
                {id: 4, name: 'Gorik' },
                {id: 5, name: 'Petya' }
            ],
            messages: [
                {id:1, message: 'Hi'},
                {id:2, message: 'sdfsdfsdf'},
                {id:3, message: 'sdfg32131'},
                {id:4, message: 'ttttrrr'},
                {id:5, message: 'Ghhhhh'},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

    }

}


export default store;
window.store = store;