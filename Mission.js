import {BaseEntity} from "./BaseEntity.js";

export class Mission extends BaseEntity {
    constructor(name, ship, target) {
        super(name);
        this.ship = ship;
        this.cargos = [];
        this.target = target;
        this.isCompleted = false;
        this.reward = 0;
    }

    addCargo(cargo) {
        const totalWeight = this.cargos.reduce((sum, c) => sum + c.weight, 0);

        if (totalWeight + cargo.weight > this.ship.capacity) {
            console.log("Too much!");

            return;
        }

        this.cargos.push(cargo);

        console.log("Cargo was added!");
    }

    calcReward() {
        const values = this.cargos.map(x => x.value);
        const maxValue = values.length ? Math.max.apply(null, values) : 0;
        const sum = values.reduce((a, b) => a + b, 0);

        this.reward = sum + maxValue;

        return this.reward;
    }

    complete() {
        this.isCompleted = true;

        const pilot = this.ship.currentPilot;

        if (pilot) {
            pilot.updateRating();
        } else {
            console.log("How we can complete that mission without a pilot?")
        }
    }

    logStatus(prefix = "") {
        console.log(`${prefix}Mission "${this.name}": ship = ${this.ship.name},
        pilot - ${this.ship.currentPilot ? this.ship.currentPilot.name : "no pilot found"},
        cargos: ${this.cargos.length}, and received in total: ${this.reward}`);
    }
}