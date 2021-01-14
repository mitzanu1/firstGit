import { createStore } from 'redux'
// import _ from 'lodash'
import reducer from './reducer'

// const PERSISTENT_PATHS = ['auth.token', 'language']

// const getValue = (path) => {
//   try {
//     return JSON.parse(localStorage.getItem(path))
//   } catch {
//     return undefined
//   }
// }

// const setValue = (path, value) => {
//   try {
//     if (_.isNil(value)) throw new Error('no_value')
//     localStorage.setItem(path, JSON.stringify(value))
//   } catch {
//     localStorage.removeItem(path)
//   }
// }

// const deleteValue = (path) => localStorage.removeItem(path)


// PERSISTENT_PATHS.forEach((path) => _.setWith(
  //   state,
  //   path,
  //   getValue(path),
  //   Object
  // ))
  const state = {}
  
const store = createStore(
  reducer,
  state,
  (global.__REDUX_DEVTOOLS_EXTENSION__)
    ? global.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

// store.subscribe(() => {
//   PERSISTENT_PATHS.forEach((path) => {
//     const value = _.get(state, path)
//     if (_.isNil(value)) deleteValue(path)
//   })
//   saveState()
// })

// const saveState = _.debounce(() => {
//   const state = store.getState() || {}
//   PERSISTENT_PATHS.forEach((path) => setValue(path, _.get(state, path)))
// }, 700, { trailing: true })

export default store