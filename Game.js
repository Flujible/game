import { Player } from "./Player.js";

export default class Game {
    players = {};
    possibleColours = ['pink', 'orange', 'blue'];
    takenColours = [];

    constructor() {}    

    get players() {
        return this.players;
    }

    set players(newPlayers) {
        this.players = newPlayers;
    }

    createPlayer(id) {
        const colour = this.possibleColours.find(colour => !this.takenColours.includes(colour));
        this.takenColours.push(colour);
        this.players[id] = new Player(id, colour);
    }

    removePlayer(id) {
        const availableColour = this.players[id].colour;
        delete this.players[id];
        this.takenColours.splice(this.takenColours.findIndex(colour => availableColour === colour), 1)
    }
}
