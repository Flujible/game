import Entity from "./Entity.js";

export default class Enemy extends Entity {
    constructor(x, y, health, moveSpeed) {
        super();
        this.pos.x = x;
        this.pos.y = y;
        this.health = health;
        this.moveSpeed = moveSpeed;
    }
}