import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
import { cssRule, style } from 'typestyle'
import { containerClass, title1Class, title2Class } from './styles'

const { div, h1, h2, span } = hh(h)

const Header = () =>
  div(`.${containerClass}`, [
    div(`.${title1Class}`, 'Akhmadullin Roman'.split('').map(word => span([word]))),
    div(`.${title2Class}`, 'a.k.a. Believer [ufa]'.split('').map(word => span([word]))),
  ])

export default Header
