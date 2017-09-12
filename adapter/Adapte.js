"use strict";
exports.__esModule = true;
var Mp4_1 = require("./Mp4");
var Adapter = /** @class */ (function () {
    function Adapter() {
    }
    Adapter.prototype.call = function (type) {
        if (type == 'Mp4') {
            var adaptee = new Mp4_1.Mp4();
            adaptee.method();
        }
    };
    return Adapter;
}());
exports.Adapter = Adapter;
