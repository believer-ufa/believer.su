import { cssRule, style, keyframes, media } from 'typestyle'
import { textShadows } from '../../styles/fonts'

const windowHeight = window.innerHeight - 100

export const container = style({
  //background    : 'rgba(3, 57, 85, 0.29)',
  background    : 'rgba(0,0,0,.1)',
  padding       : `150px 15px 15px 15px`,
  color         : 'white',
  fontSize      : `24px`,
  marginRight   : `10px`,
  lineHeight    : `1.5`,
  zIndex        : 0,

  position      : 'fixed',
  width         : `100%`,
  minHeight     : `100%`,
  maxHeight     : `100%`,
  overflow      : 'hidden',
  top           : 0,
  left          : 0,

  display        : `flex`,
  justifyContent : `center`,

  borderTop     : '1px solid rgba(134, 171, 223, 0.20)',
  borderRight   : '1px solid rgba(134, 171, 223, 0.20)',
  borderBottom  : '1px solid rgba(134, 171, 223, 0.20)',
  ... textShadows,

  animationDuration        : `2s`,
  animationIterationCount  : `1`,
  animationTimingFunction  : `ease`,
  animationFillMode        : `forwards`,

  opacity    : 1,
  transition : 'opacity 1s linear',

  $nest : {
    '&.inactive' : {
      //opacity : 0,
    },
    '& > .subcontainer' : {
      // marginLeft : `210px`,
      // marginTop  : `50px`,
      zIndex          : 1,
      maxWidth        : '1000px',
      overflow        : 'auto',
      position        : `relative`,
      paddingBottom   : '100px',
      // backgroundColor : 'rgba(0,0,0,.3)',
      // padding         : '15px',
      // border          : '1px solid rgba(134, 171, 223, 0.20)',
      $nest : {
        '& > h1' : {
          color    : 'white',
          fontSize : '30px',
        },
      }
    },
    '& > .background' : {
      backgroundSize     : `cover`,
      backgroundRepeat   : `no-repeat`,
      backgroundPosition : `50% 70%`,
      position      : 'fixed',
      width         : `100%`,
      height        : `100%`,
      overflow      : 'hidden',
      top           : 0,
      left          : 0,
      zIndex        : -1,
    },
    '&.about' : {
      clipPath      : `circle(0% at 0 0)`,
      animationName: keyframes({
        '100%' : {
          clipPath : `circle(150% at 0 0)`,
        }
      }),
    },
    '&.skills' : {
      clipPath      : `circle(0% at 5% 80%)`,
      animationName: keyframes({
        '100%' : {
          clipPath : `circle(150% at 5% 80%)`,
        }
      }),
    },
    '&.experience' : {
      clipPath      : `circle(0% at 100% 0)`,
      animationName: keyframes({
        '100%' : {
          clipPath : `circle(150% at 100% 0)`,
        }
      }),
    },
    '&.contacts' : {
      clipPath      : `circle(0% at 100% 100%)`,
      animationName: keyframes({
        '100%' : {
          clipPath : `circle(150% at 100% 100%)`,
        }
      }),
    },
    '&.about > .background' : {
      backgroundImage : 'url(/images/sections/about.jpg)',
      filter          : `brightness(50%) contrast(130%) grayscale(80%)`,
    },
    '&.skills > .background' : {
      backgroundImage : 'url(/images/sections/skills.jpg)',
      filter          : `brightness(50%) contrast(110%) grayscale(20%)`,
    },
    '&.experience > .background' : {
      backgroundImage : 'url(/images/sections/experience.jpg)',
      filter          : `brightness(60%) contrast(100%) grayscale(0%)`,
    },
    '&.contacts > .background' : {
      backgroundImage : 'url(/images/sections/contacts.jpg)',
      filter          : `brightness(60%) contrast(100%) grayscale(0%)`,
    },
  }
}, media({
  minWidth : 0,
  maxWidth : 1500,
}, {
  paddingTop : '110px',

  $nest : {
    '& > .subcontainer' : {
      paddingRight  : `15px`,
    }
  }
}),
  media({
    minWidth : 0,
    maxWidth : 1000,
  }, {
    fontSize : '18px',
    $nest : {
      '& > .subcontainer' : {
        maxWidth      : '100%',
      }
    }
  })
)

export default {
    container,
}