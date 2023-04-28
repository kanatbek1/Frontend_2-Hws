class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }
    start() {
        console.log("Машина заведена");
    }
}
class tesla extends Cars {
    constructor(model, color, wheels){
        super(model, color, wheels);
    }
}
class bently extends Cars {
    constructor(model, color, wheels){
        super(model, color, wheels);
    }
}
class rollsRoyce extends Cars {
    constructor(model, color, wheels){
        super(model, color, wheels);
    }
}
const Tesla = new tesla("model s", "white", "4");
const Bently = new bently("continental", "blue", "4");
const RollseRoyce = rollsRoyce("fantom", "black", "4");

console.log(Tesla);
console.log(Bently);
console.log(RollseRoyce);

Tesla.start();
Bently.start();
RollseRoyce.start();

/////////////////////////////////////////////////////

const red = document.getElementById("red");
const green = document.getElementById("green");
const error = document.getElementById("error");
const message = document.getElementById("message");

class trafficLight {
    constructor(red, green, error, message) {
        this.red = red;
        this.green = green;
        this.error = error;
        this.message = message;
    }

    activateLight(light, color, text) {
        light.style.backroundColor = color;
        this.message.innerText = text;
    }

    changeRed() {
        this.activateLight(this.red, "red", "STOP");
        this.green.style.backroundColor = "white";
    }

    changeGreen() {
        this.activateLight(this.green, "green", "GO");
        this.red.style.backroundColor = "white";
    }

    showError() {
        this.activateLight(this.error, "error", "error");
        this.red.style.backroundColor = "white";
        this.green.style.backroundColor = "write";
    }
}

const TrafficLight = new trafficLight(red, green, error, message)
const input = prompt("Введите цвет Red или Green");
if (input.toLowerCase() === "red") {
    TrafficLight.changeRed();
}else if (input.toLowerCase() === "green") {
    TrafficLight.changeGreen;
}else {
    TrafficLight.showError();
}


