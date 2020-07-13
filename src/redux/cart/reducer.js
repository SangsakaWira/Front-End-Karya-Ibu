import {ADD_ITEM, REMOVE_ITEM, REDUCE_ITEM} from './actionTypes'

const INITIAL_STATE = []

export const CartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_ITEM:
            return[
                ...state,
                action.item
            ]
        case REMOVE_ITEM:
            return[
                ...state,
                action.item
            ]
        case REDUCE_ITEM:
            return[
                ...state,
                action.item
            ]
        default:
            return state
    }
}