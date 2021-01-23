import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import userBookReducer from './userBookReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user_book: userBookReducer,
    books: bookReducer,
    error: errorReducer
    
});

export default rootReducer;