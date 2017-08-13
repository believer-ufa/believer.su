import { style, keyframes } from 'typestyle'

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default () => {

  const top  = parseInt(getRandomArbitrary(0,100))
  const left = parseInt(getRandomArbitrary(0,100))

  return style({
    clipPath : `circle(0% at ${top}% ${left}%)`,
    animationName: keyframes({
      '100%' : {
        clipPath : `circle(150% at ${top}% ${left}%)`,
      }
    }),
  })
}
