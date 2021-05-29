const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, welcome!', likesCount: 12},
        {id: 2, message: 'Hi, fgfgdf!', likesCount: 54},
        {id: 3, message: 'Hi, fgh!', likesCount: 765},
        {id: 4, message: 'Hi, dfgasef!', likesCount: 2}
    ],
    newPostText: 'Текст в поле',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST}); //Короткая запись return
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;