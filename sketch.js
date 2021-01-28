const e = Math.exp(1);
let cam;
let cubes = [];
let spacing = 100;
let nums;
function setup() {
  nums = createVector(10, 10);
  colorMode(HSB, nums.x * nums.y, 1, 1);
  createCanvas(500, 400, WEBGL);
  cam = createEasyCam();
  cam.state.distance = 2000;
  cam.state.center = [width / 1.5, height / 2, 0];
  cam.state_reset.distance = 2000;
  cam.state_reset.center = [width / 1.5, height / 2, 0];
  for (var j = 0; j < nums.x; j++) {
    cubes.push([]);
    for (var i = 0; i < nums.y; i++) {
      cubes[j].push(new Cube(i * spacing, width / 2, (j - 4) * spacing, spacing, map(i + j, 0, 6, 0, PI)));
    }
  }
}

function draw() {
  background(0);
  rotateX(-atan(cos(QUARTER_PI)));
  rotateY(-QUARTER_PI);
  directionalLight(255, 255, 255, -1, 1, -1);
  for (var j = 0; j < nums.x; j++) {
    for (var i = 0; i < nums.y; i++) {
  		fill(i + j * nums.x, 1, 1);
      cubes[i][j].update(z => cos(z) * sin(z));
      cubes[i][j].render();
    }
  }
}