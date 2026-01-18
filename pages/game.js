import {Pilot} from "../Pilot.js";
import {Ship} from "../Ship.js";
import {Cargo} from "../Cargo.js";
import {Mission} from "../Mission.js";
import {MissionControl} from "../MissionControl.js";
import {ships, pilots, cargos} from "../startSettings.js";

export async function game(app) {
    app.innerHTML = `
        <div id="system">
            <div id="ships"></div>
            <img class="star" src="../assets/star1.png">
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
        <div id="compositionStage">
        <div>
            <h2>Select a ship:</h2>
            <select id="chooseShip">
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
            <select id="choosePilot">
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
            <select id="choosePlanet">
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
        <div>
            <h2>Enter mission name:</h2>
            <input type="text" id="missionName">
        </div>
        <button id="approveBtn">Approve composition</button>
        </div>
        <div id="approveStage" style="display: none">
            <div id="cargos">
                <div class="cargo-card">
                    <h3>Relics</h3>
                    <p>Weight: 40; Credits: 300</p>
                    <button class="add-cargo">Add Cargo</button>
                </div>
                <div class="cargo-card">
                    <h3>Containers</h3>
                    <p>Weight: 30; Credits: 200</p>
                    <button class="add-cargo">Add Cargo</button>
                </div>
                <div class="cargo-card">
                    <h3>Mails</h3>
                    <p>Weight: 50; Credits: 400</p>
                    <button class="add-cargo">Add Cargo</button>
                </div>
                <div class="cargo-card">
                    <h3>Boxes</h3>
                    <p>Weight: 80; Credits: 500</p>
                    <button class="add-cargo">Add Cargo</button>
                </div>
                <div class="cargo-card">
                    <h3>Lights</h3>
                    <p>Weight: 200; Credits: 1200</p>
                    <button class="add-cargo">Add Cargo</button>
                </div>
                <div class="cargo-card">
                    <h3>Bugs</h3>
                    <p>Weight: 999; Credits: 0</p>
                    <button class="add-cargo">Add Cargo</button>
                </div>
                <button id="startBtn">Start mission</button>
            </div>
        </div>
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

    const controler = document.getElementById("controler");
    controler.onclick = () => {
        controler.classList.add("show");
    };

    document.addEventListener("click", (e) => {
        if (!controler.contains(e.target)) {
            if (controler.classList.contains("show")) {
                controler.classList.remove("show");
            }
        }
    });

    const cargoButtons = document.querySelectorAll(".add-cargo");
    cargoButtons.forEach((button, i) => {
        button.addEventListener("click", () => currentMission.addCargo(cargos[i]))
    })

    let currentMission = null;
    function approveCompos() {
        const shipName = document.getElementById("chooseShip").value;
        const pilotName = document.getElementById("choosePilot").value;
        const planet = document.getElementById("choosePlanet").value;
        const missionName = document.getElementById("missionName").value;

        const ship = ships.find(ship => ship.name === shipName);
        const pilot = pilots.find(pilot => pilot.name === pilotName);

        ship.assignPilot(pilot);
        currentMission = new Mission(missionName, ship, planet);
        MissionControl.registerMission(currentMission);
        document.getElementById("compositionStage").style.display = "none";
        document.getElementById("approveStage").style.display = "flex";
    }
    document.getElementById("approveBtn").addEventListener("click", approveCompos);
    document.getElementById("startBtn").addEventListener("click", () => {
        MissionControl.launchWithDisplay(currentMission, 500);
        document.getElementById("compositionStage").style.display = "flex";
        document.getElementById("approveStage").style.display = "none";
        currentMission = null;
    });
}