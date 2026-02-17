document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(document.location.search); if (params.get("unfancy")) {
        for (let i = 0; i < document.styleSheets.length; i++) {
            void(document.styleSheets.item(i).disabled=true);
        }
    } else {
        const shelfContainingDiv = document.createElement("div");
        shelfContainingDiv.id = "shelfContainingDiv"
        shelfContainingDiv.innerHTML = `
            <img src="./assets/fancy/wooden-shelf.webp">
            <div id="shelvesHolder">
                <div id="shelfOne"></div>
                <div id="shelfTwo">
                    <span data-size="small"></span><img src="./assets/fancy/pixelated-cassettes.webp" data-link="https://www.youtube.com/playlist?list=PLRBlqcQ05_RTX0GvFCIH8PtgzqMOMa5ie"><span data-size="large"></span><img src="./assets/fancy/pixelated-plushies.webp" style="--rotate:-7deg" data-link="https://modrinth.com/user/LumiLovesYou">
                </div>
                <div id="shelfThree">
                    <span data-size="large"></span><img src="./assets/fancy/pixelated-cartridges.webp" data-link="https://lumilovesyou.itch.io/"><span data-size="large"></span><span data-size="large"></span>
                </div>
                <div id="shelfFour">
                    <img src="./assets/fancy/pixelated-crumpled-ucrl.webp" style="--rotate:-7deg" data-link="https://github.com/lumilovesyou/Unofficial-Cosmic-Reach-Launcher"><span data-size="large"></span><span data-size="medium"></span>
                </div>
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
    }
});