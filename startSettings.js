import {Pilot} from "./Pilot.js";
import {Ship} from "./Ship.js";
import {Cargo} from "./Cargo.js";
import {Mission} from "./Mission.js";
import {MissionControl} from "./MissionControl.js";

const Alex = new Pilot("Alex", 3);
const Alina = new Pilot("Alina", 5);
const Walt = new Pilot("Walt", 3);
const Dan = new Pilot("Dan", 1);
const Anya = new Pilot("Anya", 2);
const Jessica = new Pilot("Jessica", 3);
const Henry = new Pilot("Henry", 3);
const William = new Pilot("William", 2);
const Oliver = new Pilot("Oliver", 1);
const James = new Pilot("James", 2);

Alex.introduceRating();
Alina.introduceRating();
Walt.introduceRating();
Dan.introduceRating();
Anya.introduceRating();
Jessica.introduceRating();
Henry.introduceRating();
William.introduceRating();
Oliver.introduceRating();
James.introduceRating();

const pilots = [Alex, Alina, Walt, Dan, Anya, Jessica, Henry, William, Oliver, James];

let companyRating = pilots.reduce((sum, pilot) => {return sum + pilot.rating}, 0)/pilots.length;
console.log(companyRating);

const quantumFalcon = new Ship("Quantum Falcon", 80, 100);
const celestialVanguard = new Ship("Celestial Vanguard", 60, 160);
const voidrunner = new Ship("Voidrunner", 140, 80);
const horizonBreaker = new Ship("Horizon Breaker", 160, 100);
const auroraNova = new Ship("Aurora Nova", 80, 200);
const starboundEclipse = new Ship("Starbound Eclipse", 50, 200);
const nebulasWrath = new Ship("Nebula’s Wrath", 60, 180);
const solarisAscendant = new Ship("Solaris Ascendant", 80, 120);
const nightfallOdyssey = new Ship("Nightfall Odyssey", 120, 80);
const blackstarSentinel = new Ship("Blackstar Sentinel", 70, 120);
const aetherSpear = new Ship("Aether Spear", 200, 0);
const ironComet = new Ship("Iron Comet", 200, 0);

export const ships = [quantumFalcon, celestialVanguard, voidrunner, horizonBreaker, auroraNova, starboundEclipse, nebulasWrath, solarisAscendant, blackstarSentinel, nightfallOdyssey];
export const extraShips = [aetherSpear, ironComet];

export function Demo() {
    starboundEclipse.assignPilot(Alex);
    horizonBreaker.assignPilot(Alina);

    starboundEclipse.info();
    blackstarSentinel.info();

    const cargo1 = new Cargo("Relics", 40 ,500);
    const cargo2 = new Cargo("Containers", 30 ,300);
    const cargo3 = new Cargo("Mails", 50 ,200);
    const cargo4 = new Cargo("Lights", 200 ,800);

    cargo1.info();
    cargo2.info();
    cargo3.info();
    cargo4.info();

    const missionAlpha = new Mission("Alpha", starboundEclipse, "victoria");
    MissionControl.registerMission(missionAlpha);
    missionAlpha.addCargo(cargo1);
    missionAlpha.addCargo(cargo2);
    missionAlpha.addCargo(cargo3);
    missionAlpha.addCargo(cargo4);
    // const logAlpha = missionAlpha.logStatus.bind(missionAlpha, "[DEBUG]");
    // logAlpha();
    //
    // MissionControl.genericLog.call(pilotA, "[Pilot]");
    // MissionControl.genericLog.apply(missionAlpha, ["[<MISSION>]"]);
    MissionControl.launchWithDisplay(missionAlpha, 500);
}
