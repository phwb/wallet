import { Map, Record } from 'immutable'
import { handleActions } from 'redux-actions'
import { CATEGORY_ADD, CATEGORY_REMOVE } from '../constants'

const CategoryModel = Record({
  id: null,
  name: ''
})

let initialState = new Map()
initialState = initialState.set('products', new CategoryModel({
  id: 'products',
  name: 'Продукты'
}))
initialState = initialState.set('car', new CategoryModel({
  id: 'car',
  name: 'Машина'
}))

const category = handleActions({
  [CATEGORY_ADD] (state, { payload }) {
    return new CategoryModel({
      id: payload.id,
      name: payload.name
    })
  }
}, new CategoryModel())

export const categories = handleActions({
  [CATEGORY_ADD] (state, action) {
    const model = category(undefined, action)

    return state.set(model.id, model)
  },

  [CATEGORY_REMOVE] (state, { payload }) {
    return state.delete(payload)
  }
}, initialState)