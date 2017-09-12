"use strict";
exports.__esModule = true;
var PhoneType_1 = require("./PhoneType");
var NokiaNfcPhone_1 = require("./NokiaNfcPhone");
var NokiaOneCameraPhone_1 = require("./NokiaOneCameraPhone");
var NokiaPhoneFactory = /** @class */ (function () {
    function NokiaPhoneFactory() {
        this.make = 'NOKIA';
    }
    NokiaPhoneFactory.prototype.createPhone = function (phoneType) {
        var phone = null;
        switch (phoneType) {
            case PhoneType_1.PhoneType.Nfc:
                phone = new NokiaNfcPhone_1.NokiaNfcPhone();
                break;
            case PhoneType_1.PhoneType.Cameras:
                phone = new NokiaOneCameraPhone_1.NokiaOneCameraPhone();
                break;
        }
        return phone;
    };
    return NokiaPhoneFactory;
}());
exports.NokiaPhoneFactory = NokiaPhoneFactory;
