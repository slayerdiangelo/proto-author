import { BOOK_INFO } from '../actions/types'

const initalState={
    isLoaded: false,
    books:[]
};

export default function(state=initalState, action){
    switch(action.type){
        case BOOK_INFO:
            return {
                isLoaded: true,
                books: action.payload
            }
        default:
            return state;
    }    
}