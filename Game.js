import { Player } from "./Player.js";
import Enemy from "./Enemy.js";

export default class Game {
    state = {
        players: {},
        enemies: [],
    }
    possibleColours = ['pink', 'orange', 'blue'];
    takenColours = [];

    constructor() {
        this.createEnemy();
    }    

    get state() {
        return this.state;
    }

    get players() {
        return this.state.players;
    }

    set players(newPlayers) {
        this.state.players = newPlayers;
    }

    createPlayer(id) {
        const colour = this.possibleColours.find(colour => !this.takenColours.includes(colour));
        this.takenColours.push(colour);
        this.state.players[id] = new Player(id, colour);
    }

    removePlayer(id) {
        const availableColour = this.state.players[id].colour;
        delete this.state.players[id];
        this.takenColours.splice(this.takenColours.findIndex(colour => availableColour === colour), 1)
    }

    createEnemy() {
        const x = Math.floor(Math.random() * 650);
        const y = Math.floor(Math.random() * 650);
        this.state.enemies.push(new Enemy(x, y, 1, 1));
    }

    removeEnemy() {

    }
}
