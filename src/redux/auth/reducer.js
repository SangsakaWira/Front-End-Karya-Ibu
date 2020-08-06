import {LOGIN,REGISTER,LOGOUT} from './actionTypes'

const INITIAL_STATE = {
    username:null,
    token:null,
    error:null,
    msg:null,
    isAuth:false
}

export const AuthReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case LOGIN:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                token:action.payload.token,
                username:action.payload.username,
                error:action.payload.error,
                msg:action.payload.msg,
                isAuth:true
            }
        case REGISTER:
            return {
                ...state,
                token:action.payload.token,
                username:action.payload.username,
                error:action.payload.error,
                msg:action.payload.msg,
                isAuth:true
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                token:null,
                username:null,
                error:null,
                msg:null,
                isAuth:false
            }
        default:
            return state
    }
}