const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, welcome!', likesCount: 12},
        {id: 2, message: 'Hi, fgfgdf!', likesCount: 54},
        {id: 3, message: 'Hi, fgh!', likesCount: 765},
        {id: 4, message: 'Hi, dfgasef!', likesCount: 2}
    ],
    newPostText: 'Текст в поле',
    profile: null,
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
                posts: [...state.posts, newPost], // создается копия вложенного массива, и сразу пуш в конец нового элемента
                newPostText: ''

            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST}); //Короткая запись return
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;