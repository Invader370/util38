var util = require('util')
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log("Гуляет " + this.name)
}

function Gulyash(n) {
    this.name = n;
}

Gulyash.prototype.sound = function() {
    console.log("Производит звук " + this.name);
}

util.inherits(Gulyash, Animal);

var murka = new Gulyash("Мурка");
murka.sound();
murka.walk();