import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, BOOK_INFO, USER_BOOK } from "./types";

export const registerUser=(userData, history) => dispatch => {
    axios.post("http://localhost:5000/users",userData)
        .then((res)=>history.push("/login"))
        .catch((err)=>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}

export const loginUser = userData => dispatch => {
    axios.get("http://localhost:5000/users")
        .then((res)=>{
            res.data.map(user => {
                if(user.email === userData.email){
                    if(user.password === userData.password){
                        localStorage.setItem("user", JSON.stringify(user));
                        dispatch(setCurrentUser(user));
                    }
                }
            })
        })
        .catch((err)=>dispatch({
            type: GET_ERRORS,
            payload: err.data
        }))
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("user");
    dispatch(setCurrentUser({}));
};

export const getBookInfo = () => dispatch =>{
    axios.get("http://localhost:5000/books")
        .then( (res) => {
            dispatch({
                type: BOOK_INFO,
                payload: res.data
            })
        })
        .catch((err) => dispatch({
            type: GET_ERRORS,
            payload: err.data
    }))
}

export const submitBook = (bookData) => dispatch =>{
    axios.post("http://localhost:5000/books", bookData)
        .then((res) =>{
            dispatch(getBookInfo());
        })
}

export const getUser = (book) => dispatch =>{
    axios.get("http://localhost:5000/users")
    .then((res) =>{
        const user = res.data.find((user) =>{
            return user.id === book.user_id;
        })
        dispatch({
            type: USER_BOOK,
            payload:  { book, user }
        })
    })
}

export const getBook = (bookId) => dispatch => {
    axios.get("http://localhost:5000/books")
        .then((res) => {
            const book = res.data.find((book) => {
                return book.id === bookId;
            })
            dispatch(getUser(book))
        })
}
