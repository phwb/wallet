import React from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import { add } from '../actions/list'
import { OPERATION_EXPENSE, OPERATION_INCOME, OPERATION_NAME } from '../constants'

// TODO начать делать добавление + мини сервер для чтения/записи
const Operation = props => {
  const { accounts, categories } = props
  const { dispatch } = props

  // пока функицю добавления диспатчим как есть (в виде статики), потом может и на просы перенесу
  const onAdd = () => dispatch(add(OPERATION_EXPENSE, 'cash', 'products', Date.now(), Math.round(Math.random() * 1000)))

  return (
    <fieldset>
      <legend>
        Добавить
        {' '}
        <select>
          <option value={ OPERATION_EXPENSE }>{ OPERATION_NAME[ OPERATION_EXPENSE ] }</option>
          <option value={ OPERATION_INCOME }>{ OPERATION_NAME[ OPERATION_INCOME ] }</option>
        </select>
      </legend>
      <label>
        Счет списания
        {' '}
        <select>
          { accounts.map(account => <option key={ account.id } value={ account.id }>{ account.name }</option>) }
        </select>
      </label>
      <hr/>
      <label>
        Категория
        {' '}
        <select>
          { categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
        </select>
      </label>
      <hr/>
      <label>
        Дата <input type="date"/>
      </label>
      <hr/>
      <label>
        Сумма <input type="number"/>
      </label>
      <hr/>
      <label>
        Примечание <textarea/>
      </label>
      <hr/>
      <button onClick={ () => onAdd() }>Добавить</button>
    </fieldset>
  )
}

Operation.propTypes = {
  accounts: array,
  categories: array,
}

const mapStateToProps = state => ({
  accounts: state.accounts.toArray(),
  categories: state.categories.toArray()
})

const OperationContainer = connect(mapStateToProps)(Operation)

export default OperationContainer
