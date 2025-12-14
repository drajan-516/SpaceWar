import { BaseEntity } from "./BaseEntity.js";

export class Cargo extends BaseEntity {
    constructor(name, weight, value) {
        super(name);
        this.weight = weight;
        this.value = value;
    }

    info() {
        console.log(`${this.displayName}: weight ${this.weight}, value: ${this.value} credits.`);
    }
}