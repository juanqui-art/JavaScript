const adversario = '';
const LOKI_DISFRACES = {
    'Iron-Man': () => 'Magneto',
    'Thor': () => 'Odin',
    'Hulk': () => 'Thanos',
    'Lobezno': () => 'Magneto',

}
const LOKI_DEFAULT_DISFRAZ = 'Loki'
const loki = LOKI_DISFRACES[adversario] ? LOKI_DISFRACES[adversario]() : LOKI_DEFAULT_DISFRAZ
console.log(loki)