const left = (i) => 2 * i + 1;
const right = (i) => 2 * i + 2;
const parent = (i) => Math.floor((i - 1) / 2);

class PrioQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  insert(val, prio) {
    this.heap.unshift({ val, prio });
    this.size++;
    this.heapify();
  }

  heapify(i = 0) {
    if (this.heap.length <= 1) return;

    let l = left(i);
    let r = right(i);

    let sm = i;
    if (l < this.size && this.heap[l].prio < this.heap[sm].prio) sm = l;
    if (r < this.size && this.heap[r].prio < this.heap[sm].prio) sm = r;
    this.swap(i, sm);
    if (sm != i) this.heapify(sm);
  }

  swap(a, b) {
    let temp = this.heap[b];
    this.heap[b] = this.heap[a];
    this.heap[a] = temp;
  }

  extract() {
    if (this.heap.length == 0) return undefined;

    let root = this.heap.shift();
    this.size--;
    if (this.heap[0] == undefined) this.heap = [];
    this.heapify();
    return root.val;
  }
}

// let pq = new PrioQueue();
// pq.insert(2, 2);
// pq.insert(11, 11);
// pq.insert(3, 3);
// pq.insert(7, 7);
// pq.insert(13, 13);
// pq.insert(9, 9);
// pq.insert(6, 6);
// pq.insert(5, 5);
// pq.insert(10, 10);
// pq.insert(4, 4);
// pq.insert(1, 1);
// pq.insert(12, 12);
// pq.insert(8, 8);

// while (pq.heap.length > 0) console.log(pq.extract());
