import {combineReducers,applyMiddleware,createStore} from 'redux'
import Thunk from 'redux-thunk'
import {ItemReducer} from './items/reducer'

const rootReducer = combineReducers({
    items:ItemReducer
})

const store = createStore(rootReducer,applyMiddleware(Thunk))

export default store 