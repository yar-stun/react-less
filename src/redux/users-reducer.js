const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, folowed: false, fullName: 'Tolya', status: 'I am looking for a Job right now...', location: {country: 'Belarus', city: 'Minsk'}, },
        {id: 2, folowed: true, fullName: 'Petr', status: 'I am a boss', location: {country: 'Belarus', city: 'Minsk'}, },
        {id: 3, folowed: false, fullName: 'Clava', status: 'Tortik', location: {country: 'Kazahstan', city: 'Astana'}, },
        {id: 4, folowed: true, fullName: 'Ron', status: 'I am looking for a Job right now...', location: {country: 'Belarus', city: 'Minsk'}, },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                ...state.users,
            }

        case UNFOLLOW:

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId}); //Короткая запись return
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });

export default usersReducer;