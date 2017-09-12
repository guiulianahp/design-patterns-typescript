import {Adapter} from "./Adapte";

export function show(type) : void {
    let adapter: Adapter = new Adapter();
    adapter.call(type);
}