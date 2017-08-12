import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
import perfectScrollbar from 'perfect-scrollbar'

const { div, input, label, h1 } = hh(h)

import aboutText      from './data/about'
import skillsText     from './data/skills'
import experienceText from './data/experience'
import contantsText   from './data/contants'

import styles from './styles'

const sectionsContent = {
  about      : aboutText,
  skills     : skillsText,
  experience : experienceText,
  contacts   : contantsText,
}

let sectionsPool  = []
const sectionsCodes = []
let zIndexCounter = 0

const Sections = ({ sections }) => {
  sections.forEach(section => {
    if (section.active) {

      if (sectionsCodes.length && sectionsCodes[sectionsCodes.length-1] === section.code) {
        return
      }

      zIndexCounter++

      sectionsCodes.push(section.code)

      sectionsPool.push({
        zIndex   : zIndexCounter,
        code     : section.code,
        inactive : false,
        visible  : true,
      })
    }
  })

  if (sectionsPool.length > 3) {
    sectionsPool[sectionsPool.length-4].visible = false
  }

  if (sectionsPool.length > 1) {
    sectionsPool[sectionsPool.length-2].inactive = true
  }

  return sectionsPool.map(sec => {

    const inactiveClass = sec.inactive ? `.inactive` : ''

    const el = div(`#section-${sec.zIndex}.${styles.container}${inactiveClass}.${sec.code}`, {
      style : `z-index: ${sec.zIndex}; ${sec.visible ? '' : 'display:none;'}`
    }, [
      div(`.subcontainer.ps.ps--theme_default.ps--active-y`, sectionsContent[sec.code]),
      div(`.background`),
    ])

    setTimeout(() => {
      const subcontainer = el.dom.querySelector('.subcontainer')

      perfectScrollbar.initialize(subcontainer, {
        wheelSpeed: 2,
        wheelPropagation: false,
        swipePropagation: false,
        minScrollbarLength: 20
      })

    }, 500)

    return el
  })
}

export default Sections