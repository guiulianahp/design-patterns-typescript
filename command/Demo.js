"use strict";
exports.__esModule = true;
var TurnOnTheLights_1 = require("./TurnOnTheLights");
var Invoker_1 = require("./Invoker");
function demo(orden) {
    var command;
    var invoker;
    if (orden === 'Turn on') {
        command = new TurnOnTheLights_1.TurnOnTheLights();
    }
    invoker = new Invoker_1.Invoker(command);
    invoker.run();
}
exports.demo = demo;
