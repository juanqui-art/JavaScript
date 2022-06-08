const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

// const another = {};
// for (const key in circle) {
//     another[key] = circle[key]
// }

// const another = Object.assign({}, circle) // targer{} puede tener mas propiedades
const another = { ...circle } // Moder forma de copiar un objeto

console.log(another)