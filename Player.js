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
        if(direction.up && this.pos.y > 0) {
            this.pos.y -= this.moveSpeed;
        }        
        if(direction.left && this.pos.x > 0) {
            this.pos.x -= this.moveSpeed;
        }    
        if(direction.down && this.pos.y + this.imgDimensions.height < 650) {
            this.pos.y += this.moveSpeed;
        }    
        if(direction.right && this.pos.x + this.imgDimensions.width < 650) {
            this.pos.x += this.moveSpeed;
        }
    }
}