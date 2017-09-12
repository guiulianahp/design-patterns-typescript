import { PhoneFactory } from './PhoneFactory';
import { Phone } from './Phone';
import { PhoneType } from "./PhoneType";
import { NokiaNfcPhone } from './NokiaNfcPhone';
import { NokiaOneCameraPhone } from './NokiaOneCameraPhone';

export class NokiaPhoneFactory implements PhoneFactory {
    make: String = 'NOKIA';
    createPhone(phoneType: PhoneType): Phone {
        let phone: Phone = null;

        switch (phoneType) {
            case PhoneType.Nfc:
                phone = new NokiaNfcPhone();
                break;
            case PhoneType.Cameras:
                phone = new NokiaOneCameraPhone();
                break;
        }

        return phone;
    }
}