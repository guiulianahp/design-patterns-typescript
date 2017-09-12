import {Phone} from './Phone';

export class NokiaOneCameraPhone implements Phone {
    numberOfCameras: Number = 1;
    start(): Boolean {
        return true;
    }
}