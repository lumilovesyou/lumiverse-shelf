document.addEventListener("DOMContentLoaded", () => {
    const shelfContainingDiv = document.createElement("div");
    shelfContainingDiv.id = "shelfContainingDiv"
    shelfContainingDiv.innerHTML = `
        <img src="./assets/images/pixelated-wooden-shelf.png">
        <div id="shelvesHolder">
            <div id="shelfOne">
                <img src="./assets/shelves/shelf-1/pixelated-cartridges.png" data-link="https://lumilovesyou.itch.io/">
            </div>
            <div id="shelfTwo"></div>
            <div id="ShelfThree"></div>
            <div id="shelfFour"></div>
        </div>
    `;

    document.getElementsByTagName("center")[0].replaceWith(shelfContainingDiv);

    Array.from(document.getElementsByTagName("img")).forEach((item) => {
        if (item.dataset.link) {
            item.addEventListener("click", (e) => {
                window.open(e.target.dataset.link, '_blank').focus();
            });
        }
    });
});