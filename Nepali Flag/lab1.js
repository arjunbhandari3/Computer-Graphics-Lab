function setup() {
    console.log(displayWidth, displayHeight);
    createCanvas(displayWidth, displayHeight);
    smooth();
    noStroke();
}

function draw() {
    background("#ffffff");

    // Blue border
    fill("#003893");
    beginShape();
    vertex(100, 100);
    vertex(400, 300);
    vertex(200, 300);
    vertex(400, 500);
    vertex(100, 500);
    endShape();

    // Red background
    fill("#dc143c");
    beginShape();
    vertex(110, 120);
    vertex(372, 292);
    vertex(180, 292);
    vertex(376, 490);
    vertex(110, 490);
    endShape();

    // moon
    //bottom ellipse
    fill("#ffffff");
    ellipse(178, 238, 82, 82);
    //upper ellipse
    fill("#dc143c");
    ellipse(178, 222, 78, 78);
    //sun above moon
    fill("#ffffff");
    star(178, 245, 20, 30, 14);

    //sun
    fill("#ffffff");
    star(182, 410, 37, 55, 12);
}

function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius2;
        var sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}