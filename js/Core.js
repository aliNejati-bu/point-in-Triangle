import mouse from "./mouse.js";
import Point from "./Point.js";

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");



function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let p = new Point(mouse.x,mouse.y,10,"red",ctx);
    p.draw();
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(mouse.x+100,mouse.y-100,10,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    requestAnimationFrame(animate)
}

animate()
