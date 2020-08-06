import React from "react"

export const AuthContext = React.createContext()

export const AuthReducer = (state,action) =>{
    switch(action.type){
        case "LOGIN":
            localStorage.setItem("token",action.payload.token)
            localStorage.setItem("username",action.payload.username)
            return{
                ...state,
                isAuth:true,

            }
        case "LOGOUT":
            localStorage.clear()
            return{
                ...state,
                isAuth:false,

            }
        default:
            return state
    }
}