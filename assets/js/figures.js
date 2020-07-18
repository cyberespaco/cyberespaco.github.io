
var N = 8;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function get_figures (n) { // -> Array
    var figures = [];
    for(let i=0; i<n; i++){
        let num = i.toString().padStart(2, "0");
        figures.push(`../images/vaporwave/img${num}.png`);
        console.log(figures[i]);
    }
    return figures;
}

function set_figures(n) {
    var elements = document.getElementsByClassName("photo image");
    var figures = get_figures(n);
    // Shuffles them for some randomness
    figures = shuffle(figures);
    
    for(var i=0; i<elements.length; i++) {
        if (elements[i].src === "") {
            elements[i].src = figures[i % figures.length];
        }
    }
}

set_figures();