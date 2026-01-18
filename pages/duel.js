import {Pilot} from "../Pilot.js";
import {Cargo} from "../Cargo.js";
import {pilots} from "../startSettings.js";
import {Duel} from "../Duel.js";

export async function duel(app) {
    app.innerHTML = `<div id="duelContainer"><h2>Duel Log</h2><p id="textContainer"></p></div>`;

    const duel = new Duel(pilots[Math.floor(Math.random()*10)], pilots[Math.floor(Math.random()*10)]);
    await duel.start(document.getElementById("textContainer"));
}