let size = 20;
let unit = 30;
let start;
let end;
const cmp = (a, b) => JSON.stringify(a) == JSON.stringify(b);
const pos = (x, y) => ({ x, y });

function setup() {
  createCanvas(size * unit, size * unit, P2D);
  const frand = (n) => floor(random(n));
  let s2 = size / 2;

  start = pos(frand(s2), frand(s2) + s2);
  end = pos(frand(s2) + s2, frand(s2));

  textAlign(CENTER, CENTER);
}

function draw() {
  background(100);

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      let p = pos(x, y);
      let f,
        t = '';
      if (cmp(p, start)) {
        f = color('lightGreen');
        t = 'S';
      } else if (cmp(p, end)) {
        f = color('tomato');
        t = 'E'
      } else noFill();

      stroke(0);
      if (f) fill(f);
      rect(x * unit, y * unit, unit, unit);
      fill(0);
      text(t, (x + 0.5) * unit, (y + 0.5) * unit);
    }
  }
}
