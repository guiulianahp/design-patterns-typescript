import {Mp3} from './Mp3';
import {Mp4} from './Mp4';

export class Adapter implements Mp3 {
    public call(type): void {
        if (type == 'Mp4') {
            let adaptee: Mp4 = new Mp4();
            adaptee.method();
        }
    }
}