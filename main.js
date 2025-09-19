addEventListener("DOMContentLoaded", () => {
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