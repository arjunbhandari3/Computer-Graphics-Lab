function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(225);
    midPointCircle(200, 500, 500);
}

function midPointCircle(radius, xc, yc) {
    //calculating intital decision paramter
    var x0 = 0;
    var y0 = radius;

    if (radius % 1 == 0) {
        var p0 = 1 - radius;
    } else {
        var p0 = (5 / 4) - radius;
    }

    var pk = p0;
    var x = x0;
    var y = y0;

    while (x < y) {
        if (pk < 0) {
            x = x + 1;
            y = y;
            pk = pk + (2 * x) + 1;
        } else {
            x = x + 1;
            y = y - 1;
            pk = pk + (2 * x) - (2 * y) + 1;
        }
        point(x + xc, y + yc)
        point(-x + xc, y + yc)
        point(x + xc, -y + yc)
        point(-x + xc, -y + yc)
        point(y + xc, x + yc)
        point(-y + xc, x + yc)
        point(y + xc, -x + yc)
        point(-y + xc, -x + yc)
    }
}