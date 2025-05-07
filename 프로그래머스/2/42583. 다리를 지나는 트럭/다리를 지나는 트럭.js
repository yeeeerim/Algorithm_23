class Queue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.q[this.tail++] = item;
  }
  shift() {
    return this.q[this.head++];
  }
  isEmpty() {
    return this.head === this.tail;
  }
  length() {
    return this.tail - this.head;
  }
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(bridge_length, weight, truck_weights) {
  const q = new Queue();
  let time = 0;
  const len = truck_weights.length;
  let pos = 0;
  let current_weight = 0; // 현재 다리 위의 총 무게

  // 다리의 길이만큼 0으로 초기화
  for (let i = 0; i < bridge_length; i++) {
    q.push(0);
  }

  while (pos < len) {
    const truck_weight = truck_weights[pos];
    time++;

    // 다리에서 나가는 트럭의 무게를 빼줌
    current_weight -= q.shift();

    // 새 트럭이 들어갈 수 있는지 확인
    if (current_weight + truck_weight <= weight) {
      q.push(truck_weight);
      current_weight += truck_weight;
      pos++;
    } else {
      q.push(0);
    }
  }

  // 마지막 트럭이 다리를 완전히 건너는 시간 추가
  return time + bridge_length;
}