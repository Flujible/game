import Entity from "./Entity";

export default class Enemy extends Entity {
    constructor(health, moveSpeed) {
        super();
        this.health = health;
        this.moveSpeed = moveSpeed;
    }
}