function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(225);
    blaLine(100, 200, 400, 500);
}

function blaLine(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;

    var m = abs(dy / dx);

    //when slope is less than 1
    if (m < 1) {
        var p0 = (2 * dy) - dx;

        var x = x1;
        var y = y1;
        var pk = p0;

        beginShape();
        for (var i = 0; i <= dx; i++) {
            if (pk < 0) {
                vertex(x, y);
                x += 1;
                pk = pk + 2 * dy;
            } else {
                vertex(x, y);
                x += 1;
                y += 1;
                pk = pk + (2 * dy) - (2 * dx);
            }
        }
        endShape();
    } else {
        //when slope is greater than or equal to 1
        var p0 = (2 * dx) - dy;

        var x = x1;
        var y = y1;
        var pk = p0;

        beginShape();
        for (var i = 0; i <= dy; i++) {
            if (pk < 0) {
                vertex(x, y);
                y += 1;
                pk = pk + 2 * dx;
            } else {
                vertex(x, y);
                x += 1;
                y += 1;
                pk = pk + (2 * dx) - (2 * dy);
            }

        }
        endShape();
    }
}