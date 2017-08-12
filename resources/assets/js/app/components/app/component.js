import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
import { Header, Sidebar, Sections } from '../index'
import styles from './styles'

const { div } = hh(h)

const View = ({ sections }) =>
  div(`.${styles.container}`, [
    Header(),
    div(`.${styles.sections}`, [
      Sidebar({ sections }),
      Sections({ sections }),
    ]),
  ])

export default View