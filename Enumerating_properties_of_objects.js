const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

for (const circleKey in circle) {
    console.log(circleKey, circle[circleKey])
}
//radius 1
// draw [Function: draw]
for (const circleElement of Object.keys(circle)) {
    console.log(circleElement, circle[circleElement])
}
// radius 1
// draw [Function: draw]
for (const circleElement of Object.entries(circle)) {
    console.log(circleElement)
}
//[ 'radius', 1 ]
// [ 'draw', [Function: draw] ]