/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const cv = document.getElementById('form-canvas');
const ctx = cv.getContext('2d');

cv.width = document.body.clientWidth * window.devicePixelRatio;
cv.height = document.body.clientHeight * window.devicePixelRatio;

const matrix = [1, 0, 0, 1, cv.width / 2, cv.height / 2];

function render() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cv.width, cv.height);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, cv.width - 40, cv.height - 40);
    ctx.fillStyle = 'black';
    ctx.font = '32px Arial';
    ctx.fillText('Canvas', 30, 60);

    ctx.setTransform(...matrix);
    ctx.strokeRect(-cv.width / 2 + 20, -cv.height / 2 + 20, cv.width - 40, cv.height - 40);
    ctx.fillText('World', -cv.width / 2 + 30, -cv.height / 2 + 60);
}


cv.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.ctrlKey) {
        matrix[0] -= event.deltaY * .01;
        matrix[3] = matrix[0];
    } else {
        matrix[4] -= event.deltaX;
        matrix[5] -= event.deltaY;
    }

    console.clear();
    console.table(matrix);

    render();
});

cv.addEventListener('mousemove', (event) => {
    console.clear();
    console.table(matrix);

    render();
});

cv.addEventListener('mousedown', (event) => {

    render();
});

cv.addEventListener('mouseup', (event) => {

    render();
});

window.addEventListener('resize', () => {
    cv.width = document.body.clientWidth * window.devicePixelRatio;
    cv.height = document.body.clientHeight * window.devicePixelRatio;

    render();
});


render();