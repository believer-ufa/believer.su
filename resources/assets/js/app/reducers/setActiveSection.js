import { SECTIONS } from '../constants/stateKeys'

export default function setActiveSection(state, action) {

  const sections = state.sections.map(section => {

    section = Object.assign({}, section)
    section.active = action.payload === section.code

    return section
  })

  return {
    ...state,
    [SECTIONS]: sections,
  }
}