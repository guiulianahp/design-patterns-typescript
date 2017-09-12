import {Phone} from './Phone';
import { PhoneType } from './PhoneType'

export interface PhoneFactory{
    make: String;
    createPhone(phoneType: PhoneType): Phone;
}