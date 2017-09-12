import { Command } from './Command';

export class Invoker{
    orden: Command;


    constructor(orden){
        this.orden = orden;
    }

    run(){
        this.orden.execute();
    }

}