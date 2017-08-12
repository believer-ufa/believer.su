import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'
import moment from 'moment'

const { h1, a, p, div, input, label } = hh(h)

const contantsText = [
  p([`
    Самый комфортный инструмент для активного общения - это Telegram.
    Напишите мне туда, если вам нужна регулярная связь со мной. Телеграм можно установить на телефон и компьютер, а также открыть в браузере.
  `]),
  p([a({ href: 'https://t.me/believerufa', target: '_blank' }, 'Телеграм аккаунт')]),
  p([a({ href: 'https://t.me/cdroma', target: '_blank' }, 'Мой канал в телеграме "от Ромы из сидирома"')]),
  p([a({ href: 'https://github.com/believer-ufa', target: '_blank' }, 'Профиль на Github')]),
  p([a({ href: 'https://moikrug.ru/saggid', target: '_blank' }, 'Резюме на Moikrug')]),
  p([a({ href: 'http://steamcommunity.com/id/believerufa', target: '_blank' }, 'Профиль в Steam')]),
]

export default contantsText