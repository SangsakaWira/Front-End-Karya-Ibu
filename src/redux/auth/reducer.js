import {LOGIN,REGISTER,LOGOUT,LOGGED_IN} from './actionTypes'
import jwt_decode from "jwt-decode";

const INITIAL_STATE = {
    id:null,
    token:null,
    error:null,
    msg:null,
    isAuth:false
}

export const AuthReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case LOGIN:
            localStorage.setItem('token',action.payload.token)
            const decoded = jwt_decode(localStorage.getItem('token'));
            return {
                ...state,
                token:action.payload.token,
                id:decoded.id,
                error:action.payload.error,
                msg:action.payload.msg,
                isAuth:true
            }
        case REGISTER:
            return {
                ...state,
                token:action.payload.token,
                id:decoded.id,
                error:action.payload.error,
                msg:action.payload.msg,
                isAuth:true
            }
        case LOGGED_IN:
            return {
                ...state,
                token:action.payload.token,
                id:decoded.id,
                error:false,
                msg:null,
                isAuth:true
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                token:null,
                id:null,
                error:null,
                msg:null,
                isAuth:false
            }
        default:
            return state
    }
}