function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(225);
    midpointldaLine(50, 100, 300, 200);
}

function midpointldaLine(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    var m = abs(dy / dx);

    var d = dy - (dx / 2);
    var x = x1,
        y = y1;

    beginShape();
    vertex(x, y);
    if (m < 1) {
        while (x < x2) {
            x++;
            if (d < 0) {
                d += dy;
            } else {
                d += (dy - dx);
                y++;
            }
            vertex(x, y);
        }
    } else {
        while (y < y2) {
            y++;
            if (d < 0) {
                d += dx;
            } else {
                d += (dx - dy);
                x++;
            }
            vertex(x, y);
        }
    }
    endShape();
}