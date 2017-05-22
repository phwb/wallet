import React from 'react'
import { string, func, array, node } from 'prop-types'

const AccountItem = props => {
  const handler = e => {
    e.preventDefault()
    props.onClick(props.id)
  }

  return (
    <li>
      { props.children }
      {' '}
      <button onClick={ handler }>удалить</button>
    </li>
  )
}

AccountItem.propTypes = {
  id: string.isRequired,
  children: node,
  onClick: func.isRequired
}

export const AccountList = props => {
  const { items } = props

  return (
    <ul>
      { items.map(item => (
        <AccountItem key={ item.id } onClick={ props.onRemove } id={ item.id }>
          { item.name }
        </AccountItem>
      )) }
    </ul>
  )
}

AccountList.propTypes = {
  items: array,
  onRemove: func.isRequired
}