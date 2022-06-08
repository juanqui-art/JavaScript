const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}
// Objects not iterables

for (let key in circle)
    console.log(key, circle[key])
// radius 1
// draw [Function: draw]
for (let key of Object.keys(circle))
    console.log(key, circle[key])
//radius 1
// draw [Function: draw]
for (let entry of Object.entries(circle))
    console.log(entry)
// [ 'radius', 1 ]
// [ 'draw', [Function: draw] ]
