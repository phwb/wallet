import React from 'react'
import { connect } from 'react-redux'
import { array, func } from 'prop-types'
import { CategoryAdd } from '../components/CategoryAdd'
import { CategoryList } from '../components/CategoryList'
import { add, remove } from '../actions/categories'

const Category = props => {
  const { categories, onAdd, onRemove } = props

  return (
    <fieldset>
      <legend>Добавить категорию</legend>
      <CategoryAdd onAdd={ onAdd }/>
      <CategoryList items={ categories } onRemove={ onRemove }/>
    </fieldset>
  )
}

Category.propTypes = {
  categories: array,
  onAdd: func.isRequired,
  onRemove: func.isRequired
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.toArray()
})

const mapDispatchToProps = {
  onAdd: add,
  onRemove: remove
}

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category)

export default CategoryContainer
