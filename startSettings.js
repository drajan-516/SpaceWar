import {Pilot} from "./Pilot.js";
import {Ship} from "./Ship.js";
import {Cargo} from "./Cargo.js";
import {Smuggler} from "./Smuggler.js";
import {Warrior} from "./Warrior.js";

const Alex = new Pilot("Alex", 3);
const Alina = new Pilot("Alina", 5);
const Walt = new Pilot("Walt", 3);
const Dan = new Pilot("Dan", 1);
const Anya = new Smuggler("Anya", 2);
const Jessica = new Smuggler("Jessica", 3);
const Henry = new Warrior("Henry", 3);
const William = new Warrior("William", 2);
const Oliver = new Smuggler("Oliver", 1);
const James = new Warrior("James", 2);

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

export const pilots = [Alex, Alina, Walt, Dan, Anya, Jessica, Henry, William, Oliver, James];

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

const relics = new Cargo("Relics", 40, 300);
const containers = new Cargo("Containers", 30, 200);
const mails = new Cargo("Mails", 50, 400);
const boxes = new Cargo("Mails", 80, 500);
const lights = new Cargo("Lights", 200, 1200);
const bugs = new Cargo("Bugs", 999, 0);
export const cargos = [relics, containers, mails, boxes, lights, bugs];
