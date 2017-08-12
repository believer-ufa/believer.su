import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'

const { div, input, label } = hh(h)

// alias label function to not conflict with label prop
const labelTag = label

import styles from './styles'

import { setActiveSection } from '../../actions/index'

const Sidebar = ({ sections }) => {

  const hasActiveSection = sections.some(sec => sec.active) ? `has-active` : ''

  const sectionsElements = sections.map(section => {
    const activeClass = section.active ? 'is-active' : ''
    return div({
      class       : `${styles.section} ${activeClass} ${hasActiveSection}`,
      onClick     : setActiveSection,
      onMouseOver : setActiveSection,
      'data-code' : section.code
    }, section.name)
  })

  // sectionsElements.push(div({ class : `${styles.sectionLast} ${hasActiveSection}` }))

  return div(`.${styles.container}`, sectionsElements)
}


export default Sidebar