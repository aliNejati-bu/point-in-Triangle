import mouse from "./mouse.js";

const canvas = document.getElementById("canvas");


const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function animate() {
    requestAnimationFrame(animate);
}


canvas.addEventListener("click", () => {
    ctx.fillStyle = "red";
    ctx.fillRect(mouse.x, mouse.y, 10, 10);
    ctx.fill();
})