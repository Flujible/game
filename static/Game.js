import { Player } from "./Player.js";

export default class Game {
    socket = io();
    player;
    
    constructor() {
        this.socket.io.on('connect_error', reason => {
            this.socket.disconnect();
            console.log(`CONNECT ERROR: ${reason}`);
        });
        this.socket.on('id', id => {
            console.log("A NEW CHALLENGER APPROACHES (client)");
            this.player = new Player(id, 'pink');
        });
        this.socket.on('info', info => console.log(info));
    }
    
}
