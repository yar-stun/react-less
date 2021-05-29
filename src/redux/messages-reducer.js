const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Tolya'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Gorik'},
        {id: 5, name: 'Petya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'sdfsdfsdf'},
        {id: 3, message: 'sdfg32131'},
        {id: 4, message: 'ttttrrr'},
        {id: 5, message: 'Ghhhhh'},
    ],
    newMessageBody: ''
}

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, //копия обьекта
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}] //копия содержимого в обьекте + добавление в конец новой записи
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messageReducer;