import Entity from "./Entity.js";

export class Player extends Entity{
    id;
    colour;

    constructor(id, colour) {
        super();
        this.health = 3;
        this.moveSpeed = 5;
        this.img = 'test'
        this.id = id;
        this.colour = colour;
        this.pos = {
            x: 0,
            y: 0,
        }
    }

    move(direction) {
        switch(direction) {
            case 'up':
                this.pos.y -= this.moveSpeed;
                break;
            case 'left':
                this.pos.x -= this.moveSpeed;
                break;
            case 'down':
                this.pos.y += this.moveSpeed;
                break;
            case 'right':
                this.pos.x += this.moveSpeed;
                break;
            default:
                break;
        }
    }
}