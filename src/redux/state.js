import {rerenderEntireThree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, welcome!', likesCount: 12},
            {id: 2, message: 'Hi, fgfgdf!', likesCount: 54},
            {id: 3, message: 'Hi, fgh!', likesCount: 765},
            {id: 4, message: 'Hi, dfgasef!', likesCount: 2}
        ],
        newPostText: 'Траляляля',
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export default state;