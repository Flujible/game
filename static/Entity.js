export default class Entity {
    moveSpeed;
    health;
    img;

    constructor() {}

    get moveSpeed() {
        return this.moveSpeed;
    }

    set moveSpeed(newSpeed) {
        this.moveSpeed = newSpeed;
    }

    get health() {
        return this.health;
    }
    
    set health(newHealth) {
        this.health = newHealth;
    }

    get img() {
        return this.img;
    }
    
    set img(newImg) {
        this.img = newImg;
    }

}