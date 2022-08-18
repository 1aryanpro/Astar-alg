const posMove = (move) => {
  return (pos) => {
    p = copy(pos);
    move(p);
    return p;
  };
};

const posLeft = posMove((p) => p.x--);
const posRight = posMove((p) => p.x++);
const posUp = posMove((p) => p.y--);
const posDown = posMove((p) => p.y++);

class Node {
  constructor(pos, val) {
    this.pos = pos;
    this.val = val;
  }
}

function cardinals(loc) {
    let l = posLeft(loc);
    let r = posRight(loc);
    let u = posUp(loc);
    let d = posDown(loc);

    return [l, u, r, d];
  }

class AStar {
  constructor(start, end, obstacles) {
    this.start = start;
    this.end = end;
    this.calculated = [];

    this.toCalculate = new PrioHeap();
  }

  heuristic(loc) {
    let dx = Math.abs(loc.x - this.end.x);
    let dy = Math.abs(loc.y - this.end.y);
    return dx + dy;
  }

  calcNode() {
    let curr = this.toCalculate.extract();
    let prev = new Node(posLeft(curr), -1);
    let cards = cardinals(curr)
  }
}

const copy = (obj) => JSON.parse(JSON.stringify(obj));
