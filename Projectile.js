export default class Projectile {
    pos = {
        x: null,
        y: null,
    };
    movement = {
        axis: null,
        change: null,
    };
    projectileSpeed = 7;
    destroy = false;
    height = 5;
    width = 5;

    constructor(x, y, direction) {
        this.pos.x = x - (this.width / 2);
        this.pos.y = y - (this.height / 2); 
        this.direction = direction;

        switch(direction) {
            case 'up':
                this.movement.axis = 'y';
                this.movement.change = -this.projectileSpeed;
                break;
            case 'left':
                this.movement.axis = 'x';
                this.movement.change = -this.projectileSpeed;
                break;
            case 'down':
                this.movement.axis = 'y';
                this.movement.change = this.projectileSpeed;
                break;
            case 'right':
                this.movement.axis = 'x';
                this.movement.change = this.projectileSpeed;
        }

        setInterval(() => {
            this.pos[this.movement.axis] += this.movement.change;
            if(this.pos.x < 0 || this.pos.x > 650 || this.pos.y < 0 || this.pos.y > 650) {
                this.destroy = true;
            }
        }, 100/6);
    }
}