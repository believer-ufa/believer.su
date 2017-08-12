import Actions from '../actions/index'
import { SET_ACTIVE_SECTION, INIT } from '../constants/actionTypes'
import { enableLogging } from '../../framework/index'
import setActiveSection from './setActiveSection'

/******************************************************************************
  Using a plain JS object to hold app state
*******************************************************************************/

const reducer = (state, action) => Actions.case({
  [SET_ACTIVE_SECTION] : () => setActiveSection(state, action),
  _: () => state,
}, action)

const reducerWithLogging = (state, action) =>
  enableLogging(state, action, reducer(state, action))

//export default reducerWithLogging

// Or export the reducer directly to turn off logging
export default reducer
