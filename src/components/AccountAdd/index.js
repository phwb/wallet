import React from 'react'
import { func } from 'prop-types'

export const AccountAdd = props => {
  let account = null

  const handler = e => {
    e.preventDefault()

    props.onAdd(account.value.trim())
    account.value = ''
  }

  return (
    <div>
      <input ref={ input => account = input }/>
      {' '}
      <button onClick={ handler }>Добавить</button>
    </div>
  )
}

AccountAdd.propTypes = {
  onAdd: func.isRequired
}