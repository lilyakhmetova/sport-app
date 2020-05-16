function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas2");
}

function draw() {
  background(0);
  fill('#87CEEB');
  rotateY(millis() / 2000);
  sphere(370, 24, 2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
