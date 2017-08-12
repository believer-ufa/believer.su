import { cssRule, style, keyframes, media } from 'typestyle'

import { textShadows } from '../../styles/fonts'

export const containerClass = style({
  display  : 'flex',
  fontSize : '20px',
  zIndex   : 100000,
  position : `relative`,
  justifyContent : 'center',
})

function makeWordsDelay(wordsCount, startDelay) {
  const words = Array.apply(null, {length: wordsCount}).map(Number.call, Number)
  const rules = {}

  words.map(index => {
    rules[`& > *:nth-child(${index})`] = {
      animationDelay : `${startDelay + (index * 0.1)}s`
    }
  })

  return rules
}

export const title1Class = style({
  color : 'white',

  $nest: {
    '& > *': {
      position : 'relative',
      opacity  : '0',

      animationName: keyframes({
        '100%' : {
          opacity: 1,
        }
      }),
      animationDuration        : `3s`,
      animationIterationCount  : `1`,
      animationTimingFunction  : `ease`,
      animationFillMode        : `forwards`,
    },
    ... makeWordsDelay(20, 1)
  }
})

export const title2Class = style({
  color      : 'white',
  marginLeft : '5px',

  $nest: {
    '& > *': {
      position : 'relative',
      opacity  : '0',

      animationName: keyframes({
        '100%' : {
          opacity: .5,
        }
      }),
      animationDuration        : `3s`,
      animationIterationCount  : `1`,
      animationTimingFunction  : `ease`,
      animationFillMode        : `forwards`,
    },
    ... makeWordsDelay(30, 4)
  }
})
