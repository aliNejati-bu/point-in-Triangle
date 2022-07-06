import mouse from "./mouse.js";
import Point from "./Point.js";

let points = [];

const canvas = document.getElementById("canvas");


const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function animate() {
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    for (let i = 0; i <points.length; i++) {
        points[i].draw();
    }
    requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", () => {
    points.push(new Point(mouse.x,mouse.y,2,"red",ctx));
})