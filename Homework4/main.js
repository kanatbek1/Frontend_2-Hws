
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
let count = 0;

function updateCount() {
    counter.innerText = count;
}

function incrementCount() {
    count++;
    updateCount();
    counter.style.color = "green";
}
function decrementCount() {
    if (count > 0) {
        count--;
        updateCount();
        counter.style.color = "red";
    }
}
incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);


//////

const container = document.getElementById("container");
const coordinates = document.getElementById("coordinates");

container.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    coordinates.innerText = `X: ${x}px, Y: ${y}px`;
});


//////


const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const message = document.getElementById("message");

function activateLight(light, color, text) {
    light.style.backgroundColor = color;
    message.innerText = text;
}

const input = prompt("Enter 'Red' or 'Green'");
if (input.toLowerCase() === "red") {
    activateLight(red, "red", "STOP");
} else if (input.toLowerCase() === "green") {
    activateLight(green, "green", "GO");
}