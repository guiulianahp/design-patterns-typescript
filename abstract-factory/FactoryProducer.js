"use strict";
exports.__esModule = true;
var NokiaPhoneFactory_1 = require("./NokiaPhoneFactory");
var PhoneFactoryProducer = /** @class */ (function () {
    function PhoneFactoryProducer() {
    }
    PhoneFactoryProducer.getPhoneFactory = function (make) {
        var phoneFactory;
        switch (make) {
            case "Nokia":
                phoneFactory = new NokiaPhoneFactory_1.NokiaPhoneFactory();
                break;
        }
        return phoneFactory;
    };
    return PhoneFactoryProducer;
}());
exports.PhoneFactoryProducer = PhoneFactoryProducer;
