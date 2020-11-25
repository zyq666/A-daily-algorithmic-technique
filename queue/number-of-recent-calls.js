class RecentCounter {
  constructor() {
    this.calls = [];
    this.head = 0;
  }
  detectResult(time) {
    if (
      this.calls.length === 0 ||
      (this.calls[this.head] <= time && this.calls[this.head] >= time - 3000)
    ) {
      this.calls.push(time);
    } else {
      this.calls.shift();
      this.detectResult(time);
    }
  }
  ping(time) {
    this.detectResult(time);
    return this.calls.length;
  }
}

const recentCouter = new RecentCounter();

console.log(
  recentCouter.ping(1),
  recentCouter.ping(100),
  recentCouter.ping(3001),
  recentCouter.ping(3002)
);
