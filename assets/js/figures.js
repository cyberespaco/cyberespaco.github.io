
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getPhotos(filePath, n) { // -> Array
    var figures = [];
    for(let i=0; i<n; i++){
        let num = i.toString().padStart(2, "0");
        figures.push(`${filePath}${num}.png`);
        console.log(figures[i]);
    }
    return figures;
}

function setFigures(filePath) {
    var photos = document.getElementsByClassName("photo-image");

    var figures = getPhotos(filePath, photos.length);
    // Shuffles them for some randomness
    figures = shuffle(figures);
    
    var j = 0;
    for(let i=0; i<photos.length; i++) {
        if (photos[i].src === "") {
            try {
                photos[i].src = figures[j++];
            } catch (e) {
                j = 0;
                photos[i].src = figures[j++];
            }
        }
    }

    var courses = document.getElementsByClassName("course-image");
    var course_figure = 'https://cyberespaco.github.io/assets/images/embreve.png';

    for(var i=0; i<courses.length; i++) {
        if (courses[i].src === "") {
            courses[i].src = course_figure;
        }
    }
}