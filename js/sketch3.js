function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas3");
}

function draw() {
  background(0);
  fill('#ADFF2F');
  rotateY(millis() / 2000);
  sphere(370, 24, 24);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
