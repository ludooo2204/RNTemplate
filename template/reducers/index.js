import currentUser from './currentUser'
import counter from './counter'
import gainage from './gainage'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentUser,
    counter,
    gainage
})

export default rootReducer