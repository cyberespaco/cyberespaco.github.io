function scrollToMe(element){

    let parent = $(element).parent()

    $(parent).animate({
        scrollLeft: $(element).offset().left +  $(parent).scrollLeft() - ($(parent).width() / 2)
    });
}

let cards = document.getElementsByClassName("card");

for (let i=0; i<cards.length; i++) {
    cards[i].onclick = function() {scrollToMe(cards[i])};
}

let actual_cards = document.getElementsByClassName("card actual");

for (let i=0; i<actual_cards.length; i++) {
    scrollToMe(actual_cards[i]);
}