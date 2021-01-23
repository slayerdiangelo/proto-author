import { USER_BOOK } from '../actions/types'

const initalState = {
    isLoaded: false,
    user:{},
    book:{}
};

export default function (state = initalState, action) {
    switch (action.type) {
        case USER_BOOK:
            return {
                isLoaded: true,
                book: action.payload.book,
                user: action.payload.user
            }
        default:
            return state;
    }
}