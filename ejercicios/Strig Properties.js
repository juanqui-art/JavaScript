const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}
showProperties(movie);
function showProperties(obj) {
    for (const objKey in obj) {
        if (typeof (movie[objKey]) ==='string'){
            console.log( `${objKey} ${movie[objKey]}`)
        }
    }
}