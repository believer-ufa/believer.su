import h from 'inferno-hyperscript'
import hh from 'hyperscript-helpers'

const { h1, a, p, div, input, label } = hh(h)

const skillsText = [
  p(`Я люблю технологии и современные стандарты, поэтому стараюсь изучать всё новое, но не ухожу в фанатичную приверженность к модным решениям и чту устоявшиеся культурные ценности, которые не меняются с годами.`),
  p(`Активно пользуюсь Linux как средой для комфортной работы. Я не супер-сисадмин, но создать инфраструктуру, написать скрипты для бекапов и сконфигурировать репликацию БД я способен.`),
  h1('Бэкенд'),
  p(`Я использую PHP. Про него пишут много плохого, но в большинстве случаев - это последствия того самого фанатизма. Используйте инструменты для получения результата: на PHP можно писать прекрасно работающие и гибко развивающиеся проекты, если у вас достаточно прямые руки.`),
  p(`
    Я достаточно развит, чтобы взять за основу какой-то фреймворк и немного доработать его под свои собственные нужды.
    Я люблю сервис-контейнеры и пишу классы с простым и удобным API.
  `),
  h1('Фронтенд'),
  p([`
    Я понимаю современные стандарты, использую `, a({href:'https://jspm.io/', target:'blank'}, 'JSPM'),`, `, a({href:'http://riotjs.com/', target:'blank'}, 'Riot.js'),` и React, конечно же. А данный сайт написан на основе `, a({href:'https://infernojs.org/', target:'blank'}, 'Inferno.js'),` и `, a({href:'https://github.com/joshburgess/inferno-most-fp-demo', target:'blank'}, 'бойлерплейта'),`, работающего на основе функциональщины, редакса, hyperscript'а и typestyle'а.
    Кстати, если вам интересно посмотреть на его исходники - то `, a({href:'https://github.com/believer-ufa/believer.su/tree/master/resources/assets/js', target:'blank'}, 'вот они'),`.
  `]),
  h1('Документация'),
  p([`
    У меня достаточно мотивации и дисциплины для того, чтобы сделить за порядком в документации к большому проекту.
    Я люблю делать её лаконичной и приятной для чтения. Поверьте, она действительно полезна тогда, когда она существует :)
  `]),
  h1('Базы данных'),
  p([`
    У меня есть достаточно опыта в работе с MySQL и PostgreSQL. В последние годы я больше внимания стал уделять PotstgreSQL как более близкой к SQL-стандартам,
    хотя опять же - никакого фанатизма не имею и очень люблю в том числе и MySQL. Понимаю, что такое NoSQL, но как-то не использовал из-за своей любви к порядку, который дают реляционные СУБД при правильном их использовании.
  `]),
]

export default skillsText