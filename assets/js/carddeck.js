function scrollToMe(element){
    let parent = element.parentNode;
    
    parent.scrollLeft = element.offsetLeft - (0.65 * element.clientWidth );
}

var cards = document.getElementsByClassName("card");

for (let i=0; i<cards.length; i++) {
    cards[i].onclick = function() {scrollToMe(cards[i])};
}