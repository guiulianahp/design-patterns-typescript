"use strict";
exports.__esModule = true;
var Invoker = /** @class */ (function () {
    function Invoker(orden) {
        this.orden = orden;
    }
    Invoker.prototype.run = function () {
        this.orden.execute();
    };
    return Invoker;
}());
exports.Invoker = Invoker;
