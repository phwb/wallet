import { createAction } from 'redux-actions'
import { ACCOUNT_ADD, ACCOUNT_REMOVE } from '../constants'

export const add = createAction(
  ACCOUNT_ADD,
  name => ({ name }),
  () => ({ generateId: true })
)

export const remove = createAction(ACCOUNT_REMOVE, id => id)