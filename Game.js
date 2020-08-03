import { Player } from "./Player.js";

export default class Game {
    state = {
        players: {},
        enemies: {}
    }
    possibleColours = ['pink', 'orange', 'blue'];
    takenColours = [];

    constructor() {}    

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
}
