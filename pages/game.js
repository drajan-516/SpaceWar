import {Pilot} from "../Pilot.js";
import {Ship} from "../Ship.js";
import {Cargo} from "../Cargo.js";
import {Mission} from "../Mission.js";
import {MissionControl} from "../MissionControl.js";
import {ships} from "../startSettings.js";
import {Demo} from "../startSettings.js";
import '../controler/show.js';

export async function game(app) {
    app.innerHTML = `
        <div id="system">
            <div id="ships"></div>
            <img class="star" src="../assets/star1.png"></img>
            <div id="fastoria" class="planet" style="left: 200px; top: 500px"></div>
            <div id="vesteria" class="planet" style="left: 1300px; top: 200px; width: 40px; height: 40px; opacity: 90%; filter: hue-rotate(20deg) brightness(50%);"></div>
            <div id="acronix" class="planet" style="left: 300px; top: 100px; width: 80px; height: 80px; filter: brightness(70%);"></div>
            <div id="basalt" class="planet" style="left: 1100px; top: 600px; width: 40px; height: 40px; filter: hue-rotate(10deg) brightness(50%);"></div>
            <div id="vengordo" class="planet" style="left: 1400px; top: 400px; width: 70px; height: 70px; opacity: 90%; filter: hue-rotate(-20deg) brightness(50%);"></div>
            <div id="cvasimo" class="planet" style="left: 600px; top: 40px; width: 40px; height: 40px; filter: brightness(30%);"></div>
            <div id="victoria" class="planet" style="left: 80px; top: 300px; width: 40px; height: 40px; filter: hue-rotate(-30deg) brightness(60%);"></div>
            <div id="astralio" class="planet" style="left: 1000px; top: 300px; width: 40px; height: 40px; filter: hue-rotate(20deg) brightness(30%);"></div>
            <div id="wingardium" class="planet" style="left: 500px; top: 240px; width: 40px; height: 40px; filter: hue-rotate(30deg) brightness(50%);"></div>
            <div id="leviosa" class="planet" style="left: 800px; top: 140px; width: 40px; height: 40px;;"></div>
        </div>
        
        <div id="controler">
        <div>
            <h2>Select a ship:</h2>
            <select>
                <option value="Quantum Falcon">Quantum Falcon</option>
                <option value="Celestial Vanguard">Celestial Vanguard</option>
                <option value="Voidrunner">Voidrunner</option>
                <option value="Horizon Breaker">Horizon Breaker</option>
                <option value="Aurora Nova">Aurora Nova</option>
                <option value="Starbound Eclipse">Starbound Eclipse</option>
                <option value="Nebula’s Wrath">Nebula’s Wrath</option>
                <option value="Nightfall Odyssey">Nightfall Odyssey</option>
            </select>
        </div>
        <div>
            <h2>Select a pilot:</h2>
            <select>
                <option value="Alex">Alex</option>
                <option value="Alina">Alina</option>
                <option value="Walt">Walt</option>
                <option value="Dan">Dan</option>
                <option value="Anya">Anya</option>
                <option value="Jessica">Jessica</option>
                <option value="Henry">Henry</option>
            </select>
        </div>
        <div>
            <h2>Select a planet:</h2>
            <select>
                <option value="fastoria">Fastoria</option>
                <option value="vesteria">Vesteria</option>
                <option value="acronix">Acronix</option>
                <option value="basalt">Basalt</option>
                <option value="vengordo">Vengordo</option>
                <option value="cvasimo">Cvasimo</option>
                <option value="victoria">Victoria</option>
                <option value="astralio">Astralio</option>
                <option value="wingardium">Wingardium</option>
                <option value="leviosa">Leviosa</option>
            </select>
        </div>
        <button onclick="">Approve composition</button>
        
        
        </div>
    `
    const shipsContainer = document.getElementById("ships");
    for (let i = 0; i < ships.length; i++) {
        const div = document.createElement("div");
        div.id = ships[i].name;
        div.classList.add("ship");
        div.style.left = 136 * (i + 1) + "px";

        shipsContainer.appendChild(div);
    }

    Demo();
}