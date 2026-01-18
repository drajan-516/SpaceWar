import {mainMenu} from "./pages/mainMenu.js";
import {game} from "./pages/game.js";
import {duel} from "./pages/duel.js";

const app = document.getElementById('app');

export async function router() {
    const hash = window.location.hash;
    const parts = hash.split('/');
    const route = parts[1] || 'home';

    await new Promise(resolve => setTimeout(resolve, 500));
    switch (route) {
        case 'mainMenu': mainMenu(app); break;
        case 'game': await game(app); break;
        case 'duel': await duel(app); break;
        default: mainMenu(app); break;
    }
}