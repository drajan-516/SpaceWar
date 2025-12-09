export class MissionControl {
    static missions = [];

    static registerMission(mission) {
        this.missions.push(mission);
    }

    static launchWithDisplay(mission, delayMs) {
        const boundLog = mission.logStatus.bind(mission, "[LUNCH]");
        console.log(`Mission has start with dilay ${delayMs}.`);
        setTimeout(() => {
            boundLog();
            this.runMission(mission);
        }, delayMs);
    }

    static runMission(mission) {
        if (!mission.ship.currentPilot) {
            console.log("No pilot found!");
            return;
        }

        const steps = [
            MissionControl._stepTakeOff,
            MissionControl._stepFly,
            MissionControl._stepDeliver,
            MissionControl._stepReturn,
        ];

        steps.forEach((fn, index) => {
            fn.call(this, mission, index + 1);
        });

        mission.calcReward();
        mission.complete();
    }

    static _stepTakeOff(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Our "${mission.ship.name} with pilot "${mission.ship.currentPilot} started!`);
    }

    static _stepFly(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Our "${mission.ship.name} flying with speed ${mission.ship.speed}!`);
    }

    static _stepDeliver(mission, stepNumber) {
        (function (m, s) {
            console.log(`Step ${s}: Adding ${m.cargos.length} to receivers.`);
        }).apply(null, [mission, stepNumber]);
    }

    static _stepReturn(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Our "${mission.ship.name} with pilot "${mission.ship.currentPilot} returned!`);
    }

    static genericLog(prefix) {
        console.log(`${prefix} ${this.displayName || this.name || "Something"} logging.`)
    }
}