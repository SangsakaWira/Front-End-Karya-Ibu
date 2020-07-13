import {ADD_ITEM, REMOVE_ITEM, REDUCE_ITEM} from './actionTypes'

export const addCart = (item) =>{
    return{
        type:ADD_ITEM,
        ...item
    }
}

export const removeItem = (item) =>{
    return{
        type:REMOVE_ITEM,
        ...item
    }
}

export const reduceItem = (item) =>{
    return{
        type:REDUCE_ITEM,
        ...item
    }
}