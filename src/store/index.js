import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from '../reducers'
import { id } from '../middlewares/id'

const logger = createLogger({
  collapsed: true
})

export const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(id, logger)
  )
}
