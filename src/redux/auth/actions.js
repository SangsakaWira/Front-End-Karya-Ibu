import {LOGIN} from './actionTypes'
import axios from 'axios'

export const login = (dataItem) =>{
    return async dispatch =>{
        let data = await axios.post("http://localhost:4500/user/login",{
        ...dataItem
        },{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(doc=>{
            return doc.data
        })
        dispatch({
            type:LOGIN,
            payload:data
        })
    }
}