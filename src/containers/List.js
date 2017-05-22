// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { OPERATION_INCOME, OPERATION_EXPENSE } from '../constants'

import type { OperationItem } from '../reducers/list'

// TODO перенести в компоненты
const OperationList = (props: { title: string, items: [] }) => {
  const { title, items } = props

  if (!items.length) {
    return null
  }

  return (
    <fieldset>
      <legend>{ title }</legend>
      <ul>
        { items.map((item: OperationItem) => (
          <li key={ item.id } style={{ margin: '10px 0' }}>
            Дата: { new Date(item.date).toLocaleDateString() }
            <br/>
            Сумма: { item.sum } руб.
          </li>
        )) }
      </ul>
    </fieldset>
  )
}

OperationList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = ({ list }) => ({
  [OPERATION_INCOME]: list.get(OPERATION_INCOME).toArray(),
  [OPERATION_EXPENSE]: list.get(OPERATION_EXPENSE).toArray()
})

const ListContainer = connect(mapStateToProps)(props => {
  return (
    <div>
      <OperationList title="Список расходов" items={ props[ OPERATION_EXPENSE ] }/>
      <br/>
      <OperationList title="Список доходов" items={ props[ OPERATION_INCOME ] }/>
    </div>
  )
})

export default ListContainer