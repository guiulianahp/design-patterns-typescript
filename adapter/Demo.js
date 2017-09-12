"use strict";
exports.__esModule = true;
var Adapte_1 = require("./Adapte");
function show(type) {
    var adapter = new Adapte_1.Adapter();
    adapter.call(type);
}
exports.show = show;
