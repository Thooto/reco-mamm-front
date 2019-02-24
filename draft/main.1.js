const canvas = document.getElementById('form-canvas');

canvas.width = document.body.clientWidth * window.devicePixelRatio;
canvas.height = document.body.clientHeight * window.devicePixelRatio;

const context = canvas.getContext('2d');

function worldCoordinates(x, y) {
    return [
        (x + world.x) * zoom + canvas.width / 2,
        (y + world.y) * zoom + canvas.height / 2
    ];
}

const world = { x: 0, y: 0 };
const mouse = { x: 0, y: 0, offsetX: 0, offsetY: 0 };

let zoom = 1;
let message = 'Idling';

const boxes = new Array(50).fill().map((box) => ({
    x: (Math.random() * 2 - 1) * 500,
    y: (Math.random() * 2 - 1) * 500,
    color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}));

const categories = [];
const questions = [];
const answers = [];

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = 'black';
    context.lineWidth = 5;

    let hovered = false;
    
    for (const box of boxes) {
        context.fillStyle = box.color;
        const [x, y] = worldCoordinates(box.x, box.y);
        const [mouseX, mouseY] = worldCoordinates(-mouse.x, -mouse.y);
        
        context.fillRect(x, y, 50 * zoom, 50 * zoom);
        
        if (!hovered) {
            if (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + 50) {
                if (mouse.click) {
                    box.x += mouse.offsetX;
                    box.y += mouse.offsetY;
                }

                hovered = true;
    
                context.strokeRect(x, y, 50 * zoom, 50 * zoom);
            }
        }
    }
    
    context.strokeRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'black';
    context.font = '32px Arial';

    context.fillText('Mouse position in canvas', 25, 50);
    context.fillText(mouse.x + ' ' + mouse.y, 25, 100);
    context.fillText('Mouse position in world', 25, 150);
    context.fillText(Math.floor((mouse.x - world.x) / zoom) + ' ' + Math.floor((mouse.y - world.y) / zoom), 25, 200);
    context.fillText('World position in canvas', 25, 250);
    context.fillText(Math.floor(world.x) + ' ' + Math.floor(world.y), 25, 300);
    context.fillText(message, 25, 350);
}

render();

canvas.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.ctrlKey) {
        zoom -= event.deltaY * .01;
        world.x -= mouse.x / zoom * event.deltaY * .01;
        world.y -= mouse.y / zoom * event.deltaY * .01;
        message = 'Zooming';
    } else {
        world.x -= event.deltaX;
        world.y -= event.deltaY;
        message = 'Scrolling';
    }

    render();
});

canvas.addEventListener('mousemove', (event) => {
    const newX = canvas.width / 2 - event.clientX * 2;
    const newY = canvas.height / 2 - event.clientY * 2;
    mouse.offsetX = mouse.x - newX;
    mouse.offsetY = mouse.y - newY;
    mouse.x = newX;
    mouse.y = newY;

    message = 'Moving';

    render();
});

canvas.addEventListener('mousedown', (event) => {
    message = 'Mouse down';
    mouse.click = true;
    render();
});

canvas.addEventListener('mouseup', (event) => {
    message = 'Mouse up';
    mouse.click = false;
    render();
});

window.addEventListener('resize', (event) => {
    canvas.width = document.body.clientWidth * window.devicePixelRatio;
    canvas.height = document.body.clientHeight * window.devicePixelRatio;

    render();
});