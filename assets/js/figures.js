var elements = document.getElementsByClassName("photo image");
var N = 8;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function get_figures (n) { // -> Array
    let figures = [];
    for(let i=0; i<n; i++){
        let num = i.toString();
        figures.push(`../images/vaporwave/img${num.padStart(2, "0")}.png`);
    }
    return figures;
}

function set_figures() {
    let figures = get_figures(N);

    // Shuffles them for some randomness
    shuffle(figures);

    for(var i=0; i<elements.length; i++) {
        if (elements[i].src === "") {
            elements[i].src = figures[i % figures.lenght];
        }
    }
}

set_figures();