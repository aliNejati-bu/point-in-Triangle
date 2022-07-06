const mouse = {
    x: 0,
    y: 0
}

document.body.addEventListener("mousemove", (ev) => {
    mouse.x = ev.offsetX;
    mouse.y = ev.offsetY;
});

export default mouse;