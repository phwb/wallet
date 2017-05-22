export const id = () => next => action => {
  const { meta, payload } = action

  if (meta && meta.generateId === true) {
    return next({
      ...action,
      payload: {
        ...payload,
        id: Math.random().toString(16).slice(2)
      }
    })
  }

  return next(action)
}
