import { createAction } from 'redux-actions'
import { CATEGORY_ADD, CATEGORY_REMOVE } from '../constants'

export const add = createAction(
  CATEGORY_ADD,
  name => ({ name }),
  () => ({ generateId: true })
)

export const remove = createAction(CATEGORY_REMOVE, id => id)