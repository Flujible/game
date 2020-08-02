import { Player } from "./Player.js";

export default class Game {
    socket = io();
    player;

    constructor() {
        this.socket.on('id', id => {
            console.log("A NEW CHALLENGER APPROACHES (client)");
            this.player = new Player(id, 'pink');
        });
        this.socket.on('info', info => console.log(info))
    }
    
}
