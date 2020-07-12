import {
    FETCH_ALL_ITEMS,
    FETCH_SINGLE_ITEM, 
    ON_CHANGE_SINGLE_ITEM, 
    UPDATE_SINGLE_ITEM,
    DELETE_SINGLE_ITEM,
    CREATE_SINGLE_ITEM,
    UPDATE_STOCK_ITEM
} from './actionTypes'

const INITIAL_STATE = {
    response:[{
        title:"",
        stock:0,
        jenis:"",
        image:""
    }]
}

export const ItemReducer = (state=INITIAL_STATE,action) =>{
    let response = action.response
    switch(action.type){
        case FETCH_ALL_ITEMS:
            return {
                ...state,
                response
            }
        case FETCH_SINGLE_ITEM:
            return{
                ...state,
                response
            }
        case CREATE_SINGLE_ITEM:
            return{
                ...state
            }
        default:
            return state
    }
}