import { combineReducers } from 'redux'
import { accounts } from './accounts'
import { categories } from './categories'
import { list } from './list'

export const rootReducer = combineReducers({
  accounts,
  categories,
  list
})
