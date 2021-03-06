import {combineReducers,applyMiddleware,createStore,compose} from 'redux'
import Thunk from 'redux-thunk'
import {ItemReducer} from './items/reducer'
import {CartReducer} from './cart/reducer'
import {AuthReducer} from './auth/reducer'

const rootReducer = combineReducers({
    items:ItemReducer,
    cart:CartReducer,
    auth:AuthReducer
})

const store = createStore(rootReducer,applyMiddleware(Thunk))
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default store 