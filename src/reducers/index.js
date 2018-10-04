import { combineReducers } from "redux"

import { SET_DARK_MODE } from "../actions";

const darkMode = (state = false, action) => {
  if (action.type === SET_DARK_MODE) {
    return action.darkMode
  }
  return state
}

export const rootReducer = combineReducers({
  darkMode
})
