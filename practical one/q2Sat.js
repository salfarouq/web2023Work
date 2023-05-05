function moveImage() {
    var image = document.getElementById("image");
    var currentPosition = image.offsetLeft;
    var newPosition = currentPosition + 100;
    image.style.left = newPosition + "px";
}
