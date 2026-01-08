function areatriangle(base, height) {
    return (base * height) / 2;
}
function areacircle(r) {
    return Math.PI * r * r;
}

function areasquare(width, height) {
    return width * height;
}


console.log("Area Module Loaded");
export { areatriangle, areacircle, areasquare };