import React from 'react'
import { connect } from 'react-redux'
import { array, func } from 'prop-types'
import { AccountAdd } from '../components/AccountAdd'
import { AccountList } from '../components/AccountList'
import { add, remove } from '../actions/accounts'

const Account = props => {
  const { accounts, onAdd, onRemove } = props

  return (
    <fieldset>
      <legend>Добавить счет</legend>
      <AccountAdd onAdd={ onAdd }/>
      <AccountList items={ accounts } onRemove={ onRemove }/>
    </fieldset>
  )
}

Account.propTypes = {
  accounts: array.isRequired,
  onAdd: func.isRequired,
  onRemove: func.isRequired
}

const mapStateToProps = ({ accounts }) => {
  return ({
    accounts: accounts.toArray()
  })
}

const mapDispatchToProps = {
  onAdd: add,
  onRemove: remove
}

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account)

export default AccountContainer
