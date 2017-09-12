import {TurnOnTheLights} from './TurnOnTheLights';
import {Invoker} from './Invoker';
import {Command} from "./Command";


export function demo(orden) : void {
    let command: Command;
    let invoker: Invoker;


    if(orden === 'Turn on'){
        command = new TurnOnTheLights();
    }

    invoker = new Invoker(command);

    invoker.run();
}