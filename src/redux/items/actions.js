import axios from 'axios'
import {
    FETCH_ALL_ITEMS,
    FETCH_SINGLE_ITEM, 
    ON_CHANGE_SINGLE_ITEM, 
    UPDATE_SINGLE_ITEM,
    CREATE_SINGLE_ITEM,
    DELETE_SINGLE_ITEM,
    FETCH_ALL_ITEMS_ALIKE,
    UPDATE_STOCK_ITEM
} from './actionTypes'

export const fetchAllItems = () => {
    return async dispatch => {
        let response = await axios
          .get(`http://localhost:4500/item/item/`)
          .then(doc => {
            return doc;
          });
        dispatch({
          type: FETCH_ALL_ITEMS,
          response: response.data.doc
        });
      };
}

export const fetchSingleItem = (id) =>{
    let response = async dispatch =>{
        let data = await axios.get(`http://localhost:4500/item/item/${id}`).then(doc=>{
            return doc
        })
        dispatch({
            type:FETCH_SINGLE_ITEM,
            response:data
        })
    }
}

export const createSingleItem = (dataItem) =>{
    let response = async dispatch =>{
        let data = await axios.post("http://localhost:4500/item/item/",{
            headers:{
                "Content-Type":"application/json"
            }
        },{
            ...dataItem
        }).then(doc=>{
            return doc
        })
        dispatch({
            type:CREATE_SINGLE_ITEM,
            response:data
        })
    }
}

export const updateSingleItem = (id) =>{
    let response = async dispatch =>{
        let data = await axios.put("").then(doc=>{
            return doc
        })
        dispatch({
            type:UPDATE_SINGLE_ITEM,
            response:data
        })
    }
}

export const updateStockItem = (id) =>{
    let response = async dispatch =>{
        let data = await axios.put("").then(doc=>{
            return doc
        })
        dispatch({
            type:UPDATE_STOCK_ITEM,
            response:data
        })
    }
}

export const deleteSingleItem = (id) =>{
    let response = async dispatch =>{
        let data = await axios.delete("").then(doc=>{
            return doc
        })
        dispatch({
            type:DELETE_SINGLE_ITEM,
            response:data
        })
    }
}

export const onChangeSingleItem = (payload) =>{
    return {
        type:ON_CHANGE_SINGLE_ITEM,
        payload:payload
    }
}

export const fetchItemsAlike = (dataItem) =>{
    return async dispatch => {
        let response = await axios
          .post(`http://localhost:4500/item/itemAlike/`,{
              title:dataItem
          },{
            headers:{
                "Content-Type":"application/json"
            }
        })
          .then(doc => {
            return doc;
          });
        dispatch({
          type: FETCH_ALL_ITEMS_ALIKE,
          response: response.data.doc
        });
      };
}