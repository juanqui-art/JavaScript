function createCircle(radius) {
    return {
        radius,
        draw(){
            console.log('draw' + radius)
        }
    }
}
circle1 = createCircle(2)
circle1.draw()
