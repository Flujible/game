import Entity from "./Entity.js";
import Projectile from "./Projectile.js";

export class Player extends Entity{
    id;
    colour;
    projectiles = [];
    canShoot = true;
    rateOfFire = 1;

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


    shoot(direction) {
        const x = this.pos.x + (this.imgDimensions.width / 2);
        const y = this.pos.y + (this.imgDimensions.height / 2);
        this.projectiles.push(new Projectile(x, y, direction));
        this.canShoot = false;
        setTimeout(() => {
            this.canShoot = true;
        }, this.rateOfFire * 500);
    }

    removeProjectiles() {
        this.projectiles.forEach((projectile, i) => {
            if(projectile.destroy) {
                this.projectiles.splice(i, 1);
            }
        })
    }
}