export class Duel {
    constructor(pilot, opponent) {
        this.pilot = pilot;
        this.opponent = opponent;
    }

    async start(container) {
        container.textContent += `\n${this.pilot.name} - ${this.pilot.type} \nVS \n${this.opponent.name} - ${this.opponent.type} `;

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        const pilotAttack = this.pilot.attack.bind(this.pilot);
        const opponentAttack = this.opponent.attack.bind(this.opponent);
        let turn = 0;

        while (this.pilot.energy > 0 && this.opponent.energy > 0) {
            if (turn % 2 === 0) {
                pilotAttack(this.opponent, container);
                await delay(1000);
            } else {
                opponentAttack(this.pilot, container);
                await delay(1000);
            }
            turn++;
        }
        const duelWinner = this.pilot.energy > 0 ? this.pilot : this.opponent;
        container.textContent += `\n${duelWinner.name} - Winner!`;
        return duelWinner;
    }
}

