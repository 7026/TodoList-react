import { createStore, compose } from 'redux'
import reducer from './reducer'

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
)
const store = createStore(
  reducer,
  //redux  谷歌插件window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(
    thunk //redux 的中间件
  )
  /*
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  */
)

export default store
