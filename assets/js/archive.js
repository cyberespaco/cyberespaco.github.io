var archivePlaceholder = {
    "title" : "",
    "img" : "https://cyberespaco.github.io/assets/images/embreve.png",
    "author" : "",
    "text" : "",
    "youtube" : "",
    "github" : "",
    "mail" : "",
    "link" : ""
}

function archiveGet(json, key) {
    if (key === undefined || key === null || !(key in json) || json[key] === undefined || json[key] === null) {
        return archivePlaceholder[key];
    }
    else {
        return json[key];
    }
}

function buildArchive(filePath) {
    $.getJSON( filePath, function ( array ) {

        let element = document.getElementById("archive");
        var innerHTML = new String();

        for (let i=0; i<array.length; i++) {
            let json = array[i];
            
            innerHTML = innerHTML + `
            <div class="feature">
                <div class="image rounded">
                    <img class="course-image" src="${archiveGet(json, "img")}" alt="" />
                </div>
                <div class="content">
                    <header>
                        <h4>${archiveGet(json, "title")}</h4>
                        <p>${archiveGet(json, "author")}</p>
                    </header>
                    <p>${archiveGet(json, "text")}</p>
                    <ul class="icons">
                        <li><a href="${archiveGet(json, "github")}" class="icon fa-github"><span class="label">Github</span></a></li>
                        <li><a href="${archiveGet(json, "youtube")}" target="_blank" class="icon fa-youtube-play"><span class="label">YouTube</span></a></li>
                        <li><a href="${archiveGet(json, "link")}" class="icon fa-link"><span class="label">Link</span></a></li>
                        <li><a href="${archiveGet(json, "mail")}" class="icon fa-envelope-o"><span class="label">Mail</span></a></li>
                    </ul>
                </div>
            </div>
                `;
        }

        element.innerHTML = `
            <div class="feature-grid">
                ${innerHTML}
            </div>
            `;
    });
}