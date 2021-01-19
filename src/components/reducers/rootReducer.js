import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer,
    error: errorReducer
    
});

export default rootReducer;