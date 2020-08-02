import Entity from "./Entity.js";

export class Player extends Entity{
    rateOfFire = 1;
    weapon = 'pistol';
    id;
    colour;

    constructor(id, colour) {
        super();
        this.health = 3;
        this.moveSpeed = 1;
        this.img = 'test'
        this.id = id;
        this.colour = colour;
    }
}