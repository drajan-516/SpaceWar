 import {BaseEntity} from "./BaseEntity.js";

export class Pilot extends BaseEntity {
    #rating = 1;

    constructor(name, experienceYears) {
        super(name);
        this.experienceYears = experienceYears;
        this.energy = 100;
    }

    attack(target, container) {
        const attackDamage = Math.floor(Math.random()*(20 - 4) + 5);
        target.energy -= attackDamage;
        container.textContent += `\n${this.name} Dealt ${attackDamage} to ${target.name}. ${target.name}'s remaining energy: ${target.energy}`;
    }

    get type() {
        return "Pilot";
    }

    get rating() {
        return this.#rating + this.experienceYears * 0.5;
    }

    updateRating() {
        if (this.#rating <= 4.8) {
            this.#rating += 0.2;
        }
    }

    introduceRating() {
        console.log(
            `${this.displayName} - pilot with experience
            ${this.experienceYears} years, and his rating: 
            ${this.rating.toFixed(1)}`
        );
    }
}