// @flow
// счета
export const ACCOUNT_ADD: string = 'ACCOUNT_ADD'
export const ACCOUNT_REMOVE: string = 'ACCOUNT_REMOVE'

// категории
export const CATEGORY_ADD: string = 'CATEGORY_ADD'
export const CATEGORY_REMOVE: string = 'CATEGORY_REMOVE'

/**
 * Доход
 * @type {string}
 */
export const OPERATION_INCOME: string = 'income'
/**
 * Расход
 * @type {string}
 */
export const OPERATION_EXPENSE: string = 'expense'
export const OPERATION_NAME = {
  [OPERATION_INCOME]: 'Доход',
  [OPERATION_EXPENSE]: 'Расход'
}

// список операций
export const LIST_ADD: string = 'LIST_ADD'