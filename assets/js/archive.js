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

function getVideoThumbnail(url, num=0) {
    // Not ready!!
    let vid = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()

    return `http://img.youtube.com/vi/${vid}/${num}.jpg`
}

function buildArchive(filePath) {
    $.getJSON( filePath, function ( array ) {

        let element = document.getElementById("archive");
        let innerHTML = "";

        let icons = ["github", "youtube", "link", "mail"];

        for (let i=0; i<array.length; i++) {
            let json = array[i];

            let iconsHTML = "";

            for (let j=0; j<icons.length; j++) {
                let icon = icons[j];

                if (!(icon in json) || json[icon] === null || json[icon] === undefined){
                    continue
                }

                let HTML = "";

                switch(icon) {
                    case "github":
                        HTML = `<li><a href="${archiveGet(json, "github")}" class="icon fa-github"><span class="label">Github</span></a></li>
                        `;
                        break;
                    case "youtube":
                        HTML = `<li><a href="${archiveGet(json, "youtube")}" target="_blank" class="icon fa-youtube-play"><span class="label">YouTube</span></a></li>
                        `;
                        break;
                    case "link":
                        HTML = `<li><a href="${archiveGet(json, "link")}" class="icon fa-link"><span class="label">Link</span></a></li>
                        `;
                        break;
                    case "mail":
                        HTML = `<li><a href="${archiveGet(json, "mail")}" class="icon fa-envelope-o"><span class="label">Mail</span></a></li>
                        `;
                        break;
                    default:
                        break;
                }

                iconsHTML = iconsHTML + HTML
            }
            
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
                        ${iconsHTML}
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