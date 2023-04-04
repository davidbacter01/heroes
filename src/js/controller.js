
export default class Controller {
    constructor(player){
        this.left = player.controls.left;
        this.right = player.controls.right;
        this.up = player.controls.up;
        this.down = player.controls.down;
        this.hit = player.controls.hit;
        this.player = player;
        this.setUp();
    }

    setUp(){
        document.addEventListener("keydown", ev => {
            switch(ev.key){
                case this.left:
                    this.player.isMovingX = true;
                    this.player.speed.x = this.player.speed.x > 0? -this.player.speed.x: this.player.speed.x;;
                    break;
                case this.right:
                    this.player.isMovingX = true;
                    this.player.speed.x = this.player.speed.x < 0? -this.player.speed.x: this.player.speed.x;
                    break;
                case this.up:
                    this.player.isMovingY = true;
                    this.player.speed.y = this.player.speed.y > 0? -this.player.speed.y: this.player.speed.y;
                    break;
                case this.down:
                    this.player.isMovingY = true;
                    this.player.speed.y = this.player.speed.y < 0? -this.player.speed.y: this.player.speed.y;
                    break;
                case this.hit:
                    console.log("Hitting!");
            }
        })

        document.addEventListener("keyup", ev => {
            switch(ev.key) {
                case this.left:
                case this.right:
                    this.player.isMovingX = false;
                    break;
                case this.up:
                case this.down:
                    this.player.isMovingY = false;
                    break;
            }
        });
    }
}