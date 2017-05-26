// @flow
import React from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import { add } from '../actions/list'
import { OPERATION_EXPENSE, OPERATION_INCOME, OPERATION_NAME } from '../constants'

type OperationProps = {
  accounts: [],
  categories: [],
  onAdd: Function
}

// TODO мини сервер для чтения/записи
const Operation = (props: OperationProps) => {
  const { accounts, categories } = props
  const { onAdd } = props

  let operationInput: HTMLSelectElement = null
  let accountInput: HTMLSelectElement = null
  let categoryInput: HTMLSelectElement = null
  let dateInput: HTMLInputElement = null
  let sumInput: HTMLInputElement = null
  let noteInput: HTMLTextAreaElement = null

  const addHandler = (e: Event): void => {
    e.preventDefault()

    const sum: number = sumInput.valueAsNumber
    const date: Date = dateInput.valueAsDate

    if (date === null) {
      alert('Введите дату')
      return
    }

    if (isNaN(sum)) {
      alert('Введите сумму')
      return
    }

    onAdd(
      operationInput.value, // операция расход/доход
      accountInput.value,   // счет списания
      categoryInput.value,  // категория
      date.getTime(),       // дата совершения операции
      sum,                  // сумма
      noteInput.value       // примечание
    )
  }

  return (
    <fieldset>
      <legend>
        Добавить
        {' '}
        <select ref={ select => operationInput = select }>
          <option value={ OPERATION_EXPENSE }>{ OPERATION_NAME[ OPERATION_EXPENSE ] }</option>
          <option value={ OPERATION_INCOME }>{ OPERATION_NAME[ OPERATION_INCOME ] }</option>
        </select>
      </legend>
      <label>
        Счет списания
        {' '}
        <select ref={ select => accountInput = select }>
          { accounts.map(account => <option key={ account.id } value={ account.id }>{ account.name }</option>) }
        </select>
      </label>
      <hr/>
      <label>
        Категория
        {' '}
        <select ref={ select => categoryInput = select }>
          { categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
        </select>
      </label>
      <hr/>
      <label>
        Дата <input ref={ input => dateInput = input } type="date" required />
      </label>
      <hr/>
      <label>
        Сумма <input ref={ input => sumInput = input } type="number" required />
      </label>
      <hr/>
      <label>
        Примечание <textarea ref={ input => noteInput = input } />
      </label>
      <hr/>
      <button onClick={ addHandler }>Добавить</button>
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

const mapDispatchToProps = {
  onAdd: add
}

const OperationContainer = connect(mapStateToProps, mapDispatchToProps)(Operation)

export default OperationContainer
