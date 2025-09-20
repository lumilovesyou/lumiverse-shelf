const floors = ["one", "two", "three", "four"];

// to-do: mobile support, add more projects, fill in ucrl link

addEventListener("DOMContentLoaded", () => {
    objects = [
        ["./assets/images/objects/videos.png", 0, "https://www.youtube.com/watch?v=akLAqthakO8&list=PLRBlqcQ05_RTX0GvFCIH8PtgzqMOMa5ie", 0, 0],
        ["s", 0],
        ["s", 0],

        ["s", 1],
        ["./assets/images/objects/cosmic-reach.png", 1, "fill me in!", 0, 1],

        ["s", 3],
        ["s", 3],
        ["./assets/images/objects/mods.png", 3, "https://modrinth.com/user/LumiLovesYou", 0, 0],
        ["s", 3],
        ["./assets/images/objects/games.png", 3, "https://lumilovesyou.itch.io/", 0, 1]
    ];

    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i];
        if (obj[0] == "s") {
            addSpacer(obj[1]);
        } else {
            addObject(obj[1], obj[2], obj[0], obj[3], obj[4])
        }
    }
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function clamp(value, min, max) {
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    }
}

function addObject(floor, link, image, size, direction) {
    const dir = ["left", "right"];

    let object = document.createElement("a");
    object.href = link;
    object.target = "_blank";
    let img = document.createElement("img");
    img.src = image;
    img.classList = `pixel object ${dir[direction]}`;
    object.appendChild(img);

    document.getElementsByClassName(floors[floor])[0].appendChild(object);
}

function addSpacer(floor) {
    let spacer = document.createElement("span");
    spacer.id = "spacer";

    document.getElementsByClassName(floors[floor])[0].appendChild(spacer);    
}