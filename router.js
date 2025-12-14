import {mainMenu} from "./pages/mainMenu.js";
import {game} from "./pages/game.js";
// import {secondLocation} from "./pages/secondLocation.controler";
// import {thirdLocation} from "./pages/thirdLocation.controler";

const app = document.getElementById('app');

export async function router() {
    const hash = window.location.hash;
    const parts = hash.split('/');
    const route = parts[1] || 'home';

    await new Promise(resolve => setTimeout(resolve, 500));
    switch (route) {
        case 'mainMenu': mainMenu(app); break;
        case 'game': await game(app); break;
        // case 'secondLocation': await secondLocation(app); break;
        // case 'thirdLocation': thirdLocation(app); break;
        default: app.innerHTML = `<h2>Error 404. Page not found</h2>`; break;
    }
}