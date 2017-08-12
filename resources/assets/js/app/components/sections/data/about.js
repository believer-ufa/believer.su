import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
import moment from 'moment'
import chislitelnie from '../../../functions/chislitelnie'

const { a, p, div, input, label } = hh(h)

const ufaLink = `https://www.google.ru/maps/place/%D0%A3%D1%84%D0%B0,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD/@54.742687,55.8725942,10.46z/data=!4m5!3m4!1s0x43d93a259216bce1:0xaceec0921eda92cc!8m2!3d54.7387621!4d55.9720554`

const now = moment()
const myBirthday = moment('1990-01-22')
const myAge = chislitelnie(now.diff(myBirthday, 'years'), [ 'год', 'года', 'лет' ])

const aboutText = [
  p(`Мир вам! Меня зовут Роман. Сейчас мне ${myAge}.`),
  p([`Я живу в `, a({ href : ufaLink, target: '_blank' }, 'Уфе'), `. Есть такой город в России. У меня нет машины, я работаю дома и в кафе, и меня устраивает такой образ жизни.`]),
  p(`
Мой внутренний комфорт сильно завязан на анализе информации,
изучении нового, поклонении своему любимому Господу и работе. Если хотите найти общие точки соприкосновения - поделитесь
со мною впечатлениями о каком-нибудь культурном произведении, фильме, научном исследовании или своих выводах из размышлений
о реальности этого мира. Если у вас такой же ум исследователя, как и у меня - то вполне возможно, что нам будет интересно пообщаться.
`),
  p(`А ещё я люблю поиграть в компьютерные игры :)`),
]

export default aboutText