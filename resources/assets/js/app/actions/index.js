import Type from 'union-type'
import { dispatch } from '../index'
import {
  INIT,
  SET_ACTIVE_SECTION,
} from '../constants/actionTypes.js'

// Record types
const DefaultAction = {
  // type: String,
}

const ActionWithStringPayload = {
  // type: String,
  payload: String,
}

// Actions
const Actions = Type({
  [INIT]: DefaultAction,
  [SET_ACTIVE_SECTION]: ActionWithStringPayload,
})

// Action creators
export const init             = ()           => dispatch(Actions[INIT]())
export const setActiveSection = ({ target }) => dispatch(Actions[SET_ACTIVE_SECTION](target.getAttribute('data-code')))

export default Actions
