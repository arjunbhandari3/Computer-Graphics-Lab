function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(225);
    ddaLine(50, 100, 300, 200);
}

function ddaLine(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    var stepSize;
    if (Math.abs(dx) > Math.abs(dy)) {
        stepSize = Math.abs(dx);
    } else {
        stepSize = Math.abs(dy);
    }

    var xInc = (dx / stepSize);
    var yInc = (dy / stepSize);

    var x = x1;
    var y = y1;

    beginShape();
    for (var i = 0; i <= stepSize; i++) {
        vertex(round(x), round(y));
        x = x + xInc;
        y = y + yInc;
    }
    endShape();
}