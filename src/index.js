import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { App } from './containers/App'

const store = configureStore()

window.s = store

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.querySelector('#root')
)