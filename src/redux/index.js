import { combineReducers } from 'redux'

import counter from './counter'
import news from './news'

export default combineReducers({
  counter,
  news,
})
