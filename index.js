// Move Dodger Left
const dodger = document.getElementById("dodger")
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
})
// Move Dodger Right
const dodger2 = document.getElementById("dodger")
function moveDodgerRight() {
    const leftNumbers = dodger2.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if (left < 360) {
        dodger2.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})
//Move Dodger Up
const dodger3 = document.getElementById("dodger")
function moveDodgerUp() {
    const bottomNumbers = dodger3.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)

    if (bottom < 380) {
        dodger3.style.bottom = `${bottom + 1}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        moveDodgerUp();
    }
})
//Move Dodger Down
const dodger4 = document.getElementById("dodger")
function moveDodgerDown() {
    const bottomNumbers = dodger4.style.bottom.replace("px", "")
    const bottom = parseInt(bottomNumbers, 10)

    if (bottom > 0) {
        dodger4.style.bottom = `${bottom - 1}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
        moveDodgerDown();
    }
})