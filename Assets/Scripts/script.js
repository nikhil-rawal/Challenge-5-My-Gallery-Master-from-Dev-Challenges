function fetchPictures() {
    let number;
    let x;
    let elementImg;
    let elementMain = document.getElementsByTagName("main")[0];

    for (x = 1; x <= 6; x++) {
        elementImg = document.createElement("img");
        number = x;
        elementImg.setAttribute("class", `displayPhoto${number}`);
        elementImg.setAttribute("src", `./Assets/Photos/photo${number}.png`);
        elementImg.setAttribute("alt", `Display Photo ${number}`);

        elementMain.appendChild(elementImg);
    }

}

fetchPictures();