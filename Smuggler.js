import {Pilot} from "./Pilot.js";

export class Smuggler extends Pilot {
    #doubleXP = Math.floor(Math.random()*10);

    constructor(name, experienceYears) {
        super(name, experienceYears);
        this.energy = 80;
    }

    attack(target, container) {
        super.attack(target, container);

        if (Math.random() < 0.2) {
            const specialSteal = 5;
            this.energy += specialSteal;
            container.textContent += `\n${this.name} Stole ${specialSteal} energy from ${target.name}. ${this.name}'s remaining energy: ${this.energy}`;
        }
    }

    get type() {
        return "Smuggler";
    }

    updateDoubleXP() {
        this.#doubleXP = Math.floor(Math.random()*10);
    }

    updateRating() {
        if (this.#doubleXP >= 5) {
            super.updateRating();
        }
        super.updateRating();
    }
}