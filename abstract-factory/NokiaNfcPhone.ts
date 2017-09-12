import {Phone} from './Phone';

export class NokiaNfcPhone implements Phone {
    numberOfCameras: Number = 2;
    start(): Boolean {
        return true;
    }
}