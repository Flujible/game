import Entity from "./Entity.js";

export class Player extends Entity{
    id;
    colour;
    movement = {
        up: false,
        down: false,
        left: false, 
        right: false
    }

    constructor(id, colour) {
        super();
        this.health = 3;
        this.moveSpeed = 1;
        this.img = 'test'
        this.id = id;
        this.colour = colour;
        this.pos = {
            x: 0,
            y: 0,
        }
    }

    beginMove(direction) {
        this.movement.direction = true;
    }

    endMove(direction) {
        this.movement.direction = false;
    }
}