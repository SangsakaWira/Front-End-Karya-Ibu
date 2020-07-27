import {LOGIN} from './actionTypes'

const INITIAL_STATE = {
    token:""
}

export const AuthReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                token:action.payload
            }
        default:
            return state
    }
}