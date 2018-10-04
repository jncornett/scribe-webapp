// @flow

import { createLogger } from "redux-logger"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

import { rootReducer } from "./reducers"

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState: Object) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
