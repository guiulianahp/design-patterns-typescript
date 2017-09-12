import {PhoneFactory} from './PhoneFactory'
import {NokiaPhoneFactory} from './NokiaPhoneFactory'

export class PhoneFactoryProducer {
    static getPhoneFactory(make: String): PhoneFactory {
        let phoneFactory: PhoneFactory;

        switch (make) {
            case "Nokia":
                phoneFactory = new NokiaPhoneFactory();
                break;
        }

        return phoneFactory;

    }
}
