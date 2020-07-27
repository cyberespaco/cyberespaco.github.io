/* This requires jQuery to work
**
*/
function buildFeedback(filePath) {

    let element = document.getElementById("feedback");

    var innerHTML = new String();

    $.getJSON(filePath, function( array ) {
        for (let i=0; i<array.lenght; i++) {
            let json = array[i];
    
            innerHTML += html`
                <div class="feature">
                    <div class="image rounded"><img class="photo-image"/></div>
                    <div class="content">
                        <header>
                            <h4>${json[name]}</h4>
                            <p>${json[caption]}</p>
                        </header>
                        <p>${json[comment]}</p>
                    </div>
                </div>
                `
        }
    });
    
    element.innerHTML = html`
    <div class="feature-grid">
		${innerHTML}
    </div>
    `
}