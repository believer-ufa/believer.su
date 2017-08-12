import { cssRule, style, keyframes, media } from 'typestyle'

const sectionElementsArr = Array.apply(null, {length: 20}).map(Number.call, Number)
const sectionsElementsRules = {}

sectionElementsArr.map(index => {
  sectionsElementsRules[`& > *:nth-child(${index})`] = {
    animationDelay : `${0 + (index * 0.2)}s`
  }
})

export const container = style({
  //flex      : '0 0 200px',
  flex           : `1 1 auto`,
  fontSize  : '24px',
  color     : 'white',

  display   : 'flex',
  //flexDirection : 'column',
  flexDirection  : 'row',
  justifyContent : `center`,


  zIndex    : 100000,
  $nest     : {
    '& > *' : {
      animationName: keyframes({
        '100%' : {
          opacity: 1,
        }
      }),
      animationDuration        : `2s`,
      animationIterationCount  : `1`,
      animationTimingFunction  : `ease`,
      animationFillMode        : `forwards`,
    },
    ... sectionsElementsRules,
  },
},
  media({
    minWidth : 0,
    maxWidth : 1500,
  }, {
    fontSize       : '18px',
  }),
)

export const section = style({
  padding      : '20px',
  cursor       : 'pointer',
  position     : 'relative',
  opacity      : '0',
  transition   : 'all .2s linear',
  //margin       : '3px 0',
  display      : `flex`,
  alignItems   : `center`,
  flex         : `0 0 auto`,
  borderRadius : '4px',

  $nest : {
    '&:hover' : {
      //background : 'linear-gradient(to right, rgba(134, 171, 223, 0) 40%, rgba(134, 171, 223, 0.20))',
    },
    '&.has-active' : {
    },
    '&.has-active.is-active' : {
      background   : `rgba(255,255,255,.1)`,
    },
  }
},
  media({
    minWidth : 0,
    maxWidth : 1500,
  }, {
    padding : '10px',
  }),
)

export const sectionLast = style({
  flex         : `1 1 auto`,
  transition   : 'all .2s linear',
  $nest : {
    '&.has-active' : {
    },
  },
})

export default {
    container,
    section,
    sectionLast,
}