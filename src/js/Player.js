import {settings as s} from "./settings";
export class Player {
    name;
    health;

    constructor(name,health) {
        this.name = name;
        this.health = s.healthMaxValue;
    }
}