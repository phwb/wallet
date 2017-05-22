import React from 'react';
import Account from './Account'
import Category from './Category'
import Operation from './Operation'
import List from './List'

// <h1>Список расходов</h1>
// <ExpenseGroup>12 апреля</ExpenseGroup>
// <ExpenseGroup>26 апреля</ExpenseGroup>

const App = props => (
  <div>
    <Account/>
    <br/>
    <Category/>
    <br/>
    <Operation/>
    <br/>
    <List/>
  </div>
)

export {
  App
}
