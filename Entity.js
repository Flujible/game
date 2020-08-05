export default class Entity {
    moveSpeed;
    health;
    img;
    imgDimensions = {
        width: 25,
        height: 40,
    }
    pos = {
        x: null,
        y: null,
    };

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