export function mainMenu(app) {
    app.innerHTML = `
        <img id="logo" src="./assets/logo.png">
        <div id="mainMenu">
            <a href="#/game">Start</a>
            <a href="#/duel">Duel</a>
        </div>
    `
}