import { style, keyframes } from 'typestyle'
import backgrounds from './backgrounds'

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomElementFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

let currentBackground = -1

export default () => {

  currentBackground++

  if (currentBackground === backgrounds.length) {
    currentBackground = 0
  }

  const top  = parseInt(getRandomArbitrary(0,100))
  const left = parseInt(getRandomArbitrary(0,100))

  const filterBrightness = parseInt(getRandomArbitrary(80,120))
  const filterContrast   = parseInt(getRandomArbitrary(80,120))
  const filterGrayscale  = parseInt(getRandomArbitrary(0,50))
  const filterSepia      = parseInt(getRandomArbitrary(0,50))

  return style({
    clipPath : `circle(0% at ${top}% ${left}%)`,
    animationName: keyframes({
      '100%' : {
        clipPath : `circle(150% at ${top}% ${left}%)`,
      }
    }),
    $nest : {
      '& > .background' : {
        backgroundImage : `url(${backgrounds[currentBackground]})`,
        backgroundColor : 'black',
        filter          : `
          brightness(${filterBrightness}%)
          contrast(${filterContrast}%)
          grayscale(${filterGrayscale}%)
          sepia(${filterSepia}%)
        `,
      },
    },
  })
}
