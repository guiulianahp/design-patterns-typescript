import {Command} from "./Command";
import {Lights} from "./Lights";


export class TurnOnTheLights implements Command{

    lights: Lights;
    constructor(){
        this.lights = new Lights();
    }

    execute(){

        this.lights.turnOn();

    }

}
