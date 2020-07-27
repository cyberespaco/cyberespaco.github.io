var path = "https://cyberespaco.github.io/assets/images/schedule"

class CardDeck {

    constructor (path, ncards) { // Array of images
        this.path = path;

        this.cards = [];
        for(let i=0; i<ncards; i++){
            let num = i.toString().padStart(2, "0");
            this.cards.push(`${this.path}${num}.png`);
        }
        this.index = 1;
    }

    static build (ncards) {
        let element = document.getElementById("card-deck");
        var deck = new CardDeck(element, ncards);

        element.getElementsByClassName("card")
    }

    next () {
        if (this.index < this.cards.lenght) {
            this.index++
        }
    }

    prev () {
        if (this.index > 1) {
            this.index--;
        }
    }
}