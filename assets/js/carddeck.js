function scrollToMe(element){

    let parent = $(element).parent()

    $(parent).animate({
        scrollLeft: $(element).position().left + ($(element).width() / 2)
    });
}

function makeScrollable(){
    let cards = document.getElementsByClassName("card");

    for (let i=0; i<cards.length; i++) {
        cards[i].onclick = function() {scrollToMe(cards[i])};
    }
}

function scrollToActual(){
    let actual_cards = document.getElementsByClassName("card actual");

    for (let i=0; i<actual_cards.length; i++) {
        scrollToMe(actual_cards[i]);
    }
}

function buildCardDeck(filePath){
    $.getJSON(filePath, function( array ) {
        
        let element = document.getElementById("feedback");
        var innerHTML = new String();

        for (let i=0; i<array.length; i++) {
            let json = array[i];
            
            let src = (("img" in json) && (json["img"] !== undefined) && (json["img"] !== null))
                        ? `src="${json['img']}"`
                        : "";

            innerHTML = innerHTML + `
                <div class="feature">
                    <div class="image rounded"><img ${src} class="photo-image"/></div>
                    <div class="content">
                        <header>
                            <h4>${json["name"]}</h4>
                            <p>${json["caption"]}</p>
                        </header>
                        <p>${json["comment"]}</p>
                    </div>
                </div>
                `;
        }

        element.innerHTML = `
            <div class="feature-grid">
                ${innerHTML}
            </div>
            `;

        // Set Figure Placeholders.
		setFigures("https://cyberespaco.github.io/assets/images/vaporwave/img");
    });
}