function scrollToMe(element){
    let parent = element.parentNode;
    
    parent.scrollLeft = element.offsetLeft - (0.5 * element.offsetWidth);
}

let cards = document.getElementsByClassName("card");

for (let i=0; i<cards.length; i++) {
    cards[i].onclick = function() {scrollToMe(cards[i])};
}

let actual_cards = document.getElementsByClassName("card actual");

for (let i=0; i<actual_cards.length; i++) {
    scrollToMe(actual_cards[i]);
}