import React from 'react'
import { func } from 'prop-types'

export const CategoryAdd = props => {
  let category = null

  const handler = e => {
    e.preventDefault()

    props.onAdd(category.value.trim())
    category.value = ''
  }

  return (
    <div>
      <input ref={ input => category = input }/>
      {' '}
      <button onClick={ handler }>Добавить</button>
    </div>
  )
}

CategoryAdd.propTypes = {
  onAdd: func.isRequired
}