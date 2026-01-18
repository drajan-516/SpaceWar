 export class MissionControl {
    static missions = [];

    static registerMission(mission) {
        this.missions.push(mission);
    }

    static launchWithDisplay(mission, delayMs) {
        const boundLog = mission.logStatus.bind(mission, "[LUNCH]");
        console.log(`Mission has start with dilay ${delayMs}.`);
        this.onMission(mission);
        setTimeout(() => {
            boundLog();
            this.runMission(mission);
        }, delayMs);
    }

    static async runMission(mission) {
        if (!mission.ship.currentPilot) {
            console.log("No pilot found!");
            return;
        }

        const steps = [
            MissionControl._stepTakeOff,
            MissionControl._stepDeliver,
            MissionControl._stepReturn,
        ];

        for (let i = 0; i < steps.length; i++) {
            await steps[i].call(this, mission, i + 1);
        }

        mission.calcReward();
        mission.complete();
        this.nonMission(mission);
    }

    static _stepTakeOff(mission, stepNumber) {
        return new Promise(resolve => {
            const duration = 60000 - 30000 * (mission.ship.speed/100);
            const ship = document.getElementById(`${mission.ship.name}`);
            const shipPos = ship.getBoundingClientRect();
            const targetPos = document.getElementById(`${mission.target}`).getBoundingClientRect();

            const distanceX = targetPos.left - shipPos.left;
            const distanceY = targetPos.top - shipPos.top;

            ship.style.transition = `transform ${duration}ms linear`;
            ship.style.transform = `translate(${distanceX}px, ${distanceY}px)`;

            console.log(`Step ${stepNumber}:
        Our "${mission.ship.name} with pilot "${mission.ship.currentPilot.name} started!`);
            setTimeout(resolve, duration);
        });
    }

    static _stepDeliver(mission, stepNumber) {
        return new Promise(resolve => {
            (function (m, s) {
                console.log(`Step ${s}: Adding ${m.cargos.length} to receivers.`);
            }).apply(null, [mission, stepNumber]);

            document.getElementById(`${mission.ship.name}`).style.transform = "translate(0px, 0px)";
            setTimeout(resolve, 60000 - 30000 * (mission.ship.speed/100));
        });
    }

    static _stepReturn(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Our "${mission.ship.name} with pilot "${mission.ship.currentPilot.name} returned!`);
    }

    static genericLog(prefix) {
        console.log(`${prefix} ${this.displayName || this.name || "Something"} logging.`)
    }

    static onMission(mission) {
        const shipOption = document.querySelector(`option[value="${mission.ship.name}"]`);
        const pilotOption = document.querySelector(`option[value="${mission.ship.currentPilot.name}"]`);
        shipOption.style.display = 'none';
        pilotOption.style.display = 'none';
    }

    static nonMission(mission) {
        const shipOption = document.querySelector(`option[value="${mission.ship.name}"]`);
        const pilotOption = document.querySelector(`option[value="${mission.ship.currentPilot.name}"]`);
        shipOption.style.display = 'block';
        pilotOption.style.display = 'block';
    }
}