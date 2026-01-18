import {Pilot} from "./Pilot.js";

export class Warrior extends Pilot {
    constructor(name, experienceYears) {
        super(name, experienceYears);
        this.energy = 80;
    }

    attack(target, container) {
        super.attack(target, container);

        if (Math.random() < 0.3) {
            target.energy -= 5;
            container.textContent += `\n${this.name} Dealt 5 additional damage to ${target.name}. ${target.name}'s remaining energy: ${target.energy}`;
        }
    }

    get type() {
        return "Warrior";
    }
}