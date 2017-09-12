import {PhoneFactoryProducer} from './FactoryProducer';
import {PhoneFactory} from './PhoneFactory';
import {Phone} from './Phone';
import {PhoneType} from "./PhoneType";

export class Demo {
    make: string = "Nokia";
    phoneFactory: PhoneFactory = null;

    constructor() {
        this.phoneFactory = PhoneFactoryProducer.getPhoneFactory(this.make);
        let phone: Phone = this.phoneFactory.createPhone(PhoneType.Cameras);
        console.log('The make of phone is ' + this.make + ' and it has ' + phone.numberOfCameras + ' cameras.');
    }

}