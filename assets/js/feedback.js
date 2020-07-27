/* This requires jQuery to work
**
*/
function buildFeedback(filePath) {
    
    $.getJSON(filePath, function( array ) {
        
        let element = document.getElementById("feedback");
        var innerHTML = new String();

        for (let i=0; i<array.lenght; i++) {
            let json = array[i];
            console.log(json);
            innerHTML = innerHTML + `
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
            console.log(innerHTML);
        }

        element.innerHTML = `
            <div class="feature-grid">
                ${innerHTML}
            </div>
            `;

        console.log(element);
    });
}