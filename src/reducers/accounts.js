import { Map, Record } from 'immutable'
import { handleActions } from 'redux-actions'
import { ACCOUNT_ADD, ACCOUNT_REMOVE } from '../constants'

const AccountModel = Record({
  id: null,
  name: ''
})

let initialState = new Map()
initialState = initialState.set('cash', new AccountModel({
  id: 'cash',
  name: 'Наличка'
}))
initialState = initialState.set('credit', new AccountModel({
  id: 'credit',
  name: 'Кредитка'
}))

const account = handleActions({
  [ACCOUNT_ADD] (state, action) {
    const { payload } = action

    return AccountModel({
      id: payload.id,
      name: payload.name
    })
  }
}, new AccountModel())

export const accounts = handleActions({
  [ACCOUNT_ADD] (state, action) {
    const model = account(undefined, action)

    return state.set(model.id, model)
  },

  [ACCOUNT_REMOVE] (state, action) {
    return state.delete(action.payload)
  }
}, initialState)