class Point {
    constructor(x, y, r, color, ctx) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.ctx = ctx;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
}


export default Point;