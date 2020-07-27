/* This requires jQuery to work
**
*/
function buildFeedback(filePath) {
    
    $.getJSON(filePath, function( array ) {
        
        let element = document.getElementById("feedback");
        var innerHTML = new String();

        console.log(array);

        for (let i=0; i<array.lenght; i++) {
            console.log(array[i]);
            var json = array[i];
            console.log(json);
            innerHTML = innerHTML + `
                <div class="feature">
                    <div class="image rounded"><img class="photo-image"/></div>
                    <div class="content">
                        <header>
                            <h4>${json["name"]}</h4>
                            <p>${json["caption"]}</p>
                        </header>
                        <p>${json["comment"]}</p>
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