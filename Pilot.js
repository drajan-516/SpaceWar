import {BaseEntity} from "./BaseEntity";

export class Pilot extends BaseEntity {
    #rating = 1;

    constructor(name, experienceYears) {
        super(name);
        this.experienceYears = experienceYears;
    }

    get rating() {
        return this.#rating + this.experienceYears * 0.5;
    }

    updateRating() {
        this.#rating += 0.2;
    }

    introduceRating() {
        console.log(
            `${this.displayName} - pilot with experience
            ${this.experienceYears} years, and his rating: 
            ${this.rating.toFixed(1)}`
        );
    }
}