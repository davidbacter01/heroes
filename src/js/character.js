import Controller from "./controller.js";


export default class Character {
    constructor(name, controls, sprite) {
        this.controls = controls; // obj: {left: key, right: key, up: key, down: key, hit: key}
        this.name = name;
        this.position = {
            x: 0,
            y: 0
        }
        this.isMovingX = false;
        this.isMovingY = false;
        this.speed = {x:1, y:1};
        this.power = 1;
        this.hp = 100;
        this.sprite = sprite
        this._controller = new Controller(this);
    }

    update(){
        if (this.isMovingX){
            this.position.x += this.speed.x;            
        }
        if (this.isMovingY) {
            this.position.y += this.speed.y;
        }
    }

    render(ctx){
        // render a square for now
        this.update();
        if (this.isMovingX || this.isMovingY) {
            this.sprite.renderWalking(ctx, this.position); 
        } else {
            this.sprite.renderStanding(ctx, this.position);
        }     
    }
}