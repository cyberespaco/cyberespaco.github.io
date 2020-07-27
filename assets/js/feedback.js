/* This requires jQuery to work
**
*/
function buildFeedback(filePath) {

    let element = document.getElementById("feedback");

    console.log(element);

    var innerHTML = new String();

    $.getJSON(filePath, function( array ) {
        console.log(array);
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
                `;
        }
    });

    console.log(innerHTML);
    
    element.innerHTML = `
    <div class="feature-grid">
		${innerHTML}
    </div>
    `;
}