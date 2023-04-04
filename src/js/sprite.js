export default class Sprite {
    constructor(spriteOptions) {
        this.walkingSpriteSheet = new Image();
        this.walkingSpriteSheet.src = spriteOptions.walking;
        this.standingSpriteSheet = new Image();
        this.standingSpriteSheet.src = spriteOptions.standing;
        this.dustSheet = new Image();
        this.dustSheet.src = spriteOptions.dust;
        this.frameIndex = 1;
        this.width = 32;
        this.height = 37;
        this.tickCount = 0;
        this.ticksPerFrame = 15;
    }

    update() {
        this.frameIndex += 1;
        if (this.frameIndex >= 6) {
            this.frameIndex = 1;
        }
    }

    renderWalking(ctx, position) {
        this.tickCount += 1;
        if (this.tickCount == this.ticksPerFrame){        
            this.update()
            this.tickCount = 0;
        }
        ctx.drawImage(
            this.walkingSpriteSheet, 
            this.frameIndex * this.width, 
            0, 
            this.width, 
            this.height, 
            position.x, 
            position.y, 
            60, 
            60
        );
        ctx.drawImage(
            this.dustSheet, 
            this.frameIndex * this.width, 
            0, 
            this.width, 
            this.height, 
            position.x, 
            position.y, 
            60, 
            60
        );
    }

    renderStanding(ctx, position) {
        ctx.drawImage(
            this.standingSpriteSheet,
            0,
            0,
            this.width,
            this.height,
            position.x,
            position.y,
            60,
            60
        );
    }
}