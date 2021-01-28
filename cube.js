class Cube {
  constructor(x_, y_, z_, size_, offset_) {
    this.x = x_;
    this.y = y_;
    this.z = z_;
    this.size = size_;
    this.offset = offset_;
    this.angle = 0;
  }

  update(f) {
    this.y = map(f(this.angle + this.offset), -1, 1, this.size / 2, height - this.size / 2);
    this.angle += 0.05;
  }

  render() {
    push();
    stroke(0);
    translate(this.x, this.y, this.z);
    box(this.size);
    pop();
  }
}
