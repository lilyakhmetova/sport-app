function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
    background(255);
}

function draw() {
    // fill(255, 15);
    // noStroke();
    // rect(0, 0, windowWidth, windowHeight);
    //
    // stroke(0);
    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
  background(0);

  fill('#fae');
  rotateY(millis() / 2000);
  sphere(100, 24, 2);

  fill('#ADFF2F');
  translate(100, 200);
  rotateY(millis() / 400);
  sphere(150, 24, 24);

  fill('#87CEEB');
  translate(-400, -200);
  rotateX(millis() / 2000);
  sphere(200, 24, 3);
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
