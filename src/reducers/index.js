import { combineReducers } from 'redux'
import counter from './counter'
import locations from './locations'

const rootReducer = combineReducers({
  counter,
  locations,
})

export default rootReducer
