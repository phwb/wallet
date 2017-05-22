import { createAction } from 'redux-actions'
import { LIST_ADD } from '../constants'

export const add = createAction(
  LIST_ADD,
  (operation, accountId, categoryId, date, sum, note = '') => ({ operation, accountId, categoryId, date, sum, note }),
  () => ({ generateId: true })
)
