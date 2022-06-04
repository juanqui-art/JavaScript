function createCircle(radius) {
    return {
        radius,
        draw(){
            console.log('draw')
        }
    }
}
circle1 = createCircle(2)
circle1.draw()
