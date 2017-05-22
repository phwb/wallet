// @flow
import { handleActions } from 'redux-actions'
import { Record, Map } from 'immutable'
import { LIST_ADD, OPERATION_EXPENSE, OPERATION_INCOME } from '../constants'

export type OperationItem = {
  id: string,
  accountId: string,
  categoryId: string,
  date: number,
  sum: number,
  note: string
}

// модель
const Item: Record<OperationItem> = Record({
  id: null,
  accountId: null,
  categoryId: null,
  date: null,
  sum: 0,
  note: ''
})

// редьюсер для одной записи
const item = handleActions({
  [LIST_ADD] (...args) {
    const [ , action ] = args

    return new Item(action.payload)
  }
}, new Item())

// начальное состояние, объект из двух записей доход/расход
const initialState = new Map({
  [OPERATION_EXPENSE]: new Map(),
  [OPERATION_INCOME]: new Map()
})

// редьюсер всего списка операций доход/расход
export const list = handleActions({
  [LIST_ADD] (state, action) {
    const { operation } = action.payload
    const model = item(undefined, action)

    return state.setIn([ operation, model.id ], model)
  }
}, initialState)
