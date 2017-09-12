"use strict";
exports.__esModule = true;
var FactoryProducer_1 = require("./FactoryProducer");
var PhoneType_1 = require("./PhoneType");
var Demo = /** @class */ (function () {
    function Demo() {
        this.make = "Nokia";
        this.phoneFactory = null;
        this.phoneFactory = FactoryProducer_1.PhoneFactoryProducer.getPhoneFactory(this.make);
        var phone = this.phoneFactory.createPhone(PhoneType_1.PhoneType.Cameras);
        console.log('The make of phone is ' + this.make + ' and it has ' + phone.numberOfCameras + ' cameras.');
    }
    return Demo;
}());
exports.Demo = Demo;
