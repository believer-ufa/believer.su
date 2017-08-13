import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
import moment from 'moment'
import chislitelnie from '../../../functions/chislitelnie'

const { h1, a, p, div, input, label } = hh(h)

const now = moment()
const workBegin = moment('2008-01-01')
const workAge = chislitelnie(now.diff(workBegin, 'years'), [ 'год', 'года', 'лет' ])

const academyBegin = moment('2015-11-01')
const academyAge = chislitelnie(now.diff(academyBegin, 'years'), [ 'год', 'года', 'лет' ])

const experienceText = [
  p(`Началось всё где-то в колледже, в котором я писал программы на Delphi :) Это было где-то ${workAge} назад.`),
  p(`
    Как-то так всё получилось, что я почти всегда работал как сотрудник в организациях
    над какими-то более-менее большими проектами. У меня почти нет опыта на фрилансе, почти нет маленьких проектов.
  `),
  h1('Стажёрство'),
  p(`
    На последнем курсе колледжа я устроился сисадмином в одну из известных кулинарий города, где проработал около года, даже успел написать какую-то программу
    для оптимизации учёта посещаемости сотрудников. Но понятное дело, что сисадмин и программист - это разные вещи. Поэтому далее захотелось
    чего-то большего, и я через какое-то время я начал работать с службе спасения своего города, уже полноценным программистом. Там появился первый
    опыт работы с сайтами. Через пару лет я уволился оттуда и перешёл в газету "Работа", тоже своего города. Там я впервые узнал про фреймворк Kohana,
    с которым впоследствии провёл несколько приятных лет.
  `),
  h1('Первые нормальные проекты'),
  p(`
    Через какое-то время мои друзья стали приглашать меня стать техническим руководителем в свой стартап, на что через какое-то время
    я согласился, и мы стали пилить на Кохане свою социальную бизнес сеть. Амбиции были чрезмерно большие, денег было мало,
    и через два с половиной года деньги и мотивация руководителей закончились совсем, и проект решили закрыть.
    Ну а я за это время получил бесценный опыт и хорошо развил свой мозг на сложных задачах стартапа.
  `),
  p([`
    Параллельно с работой над социальной бизнес сетью, я создал в то время свой личный проект `,a({ href:'http://quran-online.ru/', target:'_blank' }, 'Коран Онлайн'),`, который потихоньку развиваю и по сей день. Данный сайт позволяет прочесть любой аят Корана, а также разъяснения к нему от нескольких самых известных исламских учёных.
    Изначально он был написан на фреймворке Kohana, но впоследствии я переписал его на Laravel. Сам проект с точки зрения кода на бэкенде не такой небольшой,
    поэтому переписывать там было не так много.
  `]),
  p(`
    Следующим проектом, в который я снова пришёл как руководитель - был медицинский портал. Здесь мы тоже взяли за основу Kohana.
    Проект снова был с большими амбициями, и я даже написал для него систему мультиязычности, которая позволяла без проблем переводить на любое количество
    языков весь живой контент проекта. Проект живёт и развивается до сих пор, но, к сожалению, какой-то популярности в мире не набрал.
    Над данным медицинским порталом я проработал два года, после чего меня пригласили в намного более интересный для меня проект, так как он был
    связан с моей религией.
  `),
  h1('Настоящее время'),
  p([`
    Сейчас я являюсь техническим руководителем международного проекта `,a({ href: 'https://ru.quranacademy.org/profile', target:'_blank' }, 'Академия Корана'),`. Данный проект мы пишем на основе фреймворка Laravel, а на стороне фронтенда трудятся JSPM и Riot.js. Проект также является мультиязычным.
    Я работаю здесь уже ${academyAge}.
  `]),
]

export default experienceText