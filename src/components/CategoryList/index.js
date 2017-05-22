import React from 'react'
import { string, func, array, node } from 'prop-types'

const CategoryItem = props => {
  const handler = e => {
    console.log(e)
    e.preventDefault()
    // props.onClick(props.id)
  }

  return (
    <li>
      { props.children }
      {' '}
      <button onClick={ handler }>удалить</button>
    </li>
  )
}

CategoryItem.propTypes = {
  id: string.isRequired,
  children: node,
  onClick: func.isRequired
}

export const CategoryList = props => {
  const { items } = props

  return (
    <ul>
      { items.map(item => (
        <CategoryItem key={ item.id }
                      id={ item.id }
                      onClick={ props.onRemove }
        >
          { item.name }
        </CategoryItem>
      )) }
    </ul>
  )
}

CategoryList.propTypes = {
  items: array,
  onRemove: func
}