import Character from "./character.js";
import Sprite from "./sprite.js";

const SPRITES = {
    pinkMonster: {
        walking: "../../craftpix-675522-free-pixel-art-tiny-hero-sprites/pink_monster/Pink_Monster_Walk_6.png",
        standing: "../../craftpix-675522-free-pixel-art-tiny-hero-sprites/pink_monster/Pink_Monster.png",
        dust: "../../craftpix-675522-free-pixel-art-tiny-hero-sprites/pink_monster/Walk_Run_Push_Dust_6.png"
        },
    owlMonster: {
        walking: "",
        standing: ""
    },
    dudeMonster: {
        walking: "",
        standing: ""
    }
}

// set game screen
const screen = document.getElementById("main-screen");
const ctx = screen.getContext("2d");
screen.width  = window.innerWidth - 50;
screen.height = window.innerHeight - 50;

const pinkSprite = new Sprite(SPRITES.pinkMonster);
const player = new Character("Pinky", {
    up: "w",
    down: "s",
    left: "a",
    right: "d",
    hit: "l"
}, pinkSprite);

function animate(){
    ctx.clearRect(0, 0, screen.width, screen.height);
    player.render(ctx);
    requestAnimationFrame(animate);
}

animate();