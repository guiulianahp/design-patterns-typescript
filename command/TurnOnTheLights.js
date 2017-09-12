"use strict";
exports.__esModule = true;
var Lights_1 = require("./Lights");
var TurnOnTheLights = /** @class */ (function () {
    function TurnOnTheLights() {
        this.lights = new Lights_1.Lights();
    }
    TurnOnTheLights.prototype.execute = function () {
        this.lights.turnOn();
    };
    return TurnOnTheLights;
}());
exports.TurnOnTheLights = TurnOnTheLights;
