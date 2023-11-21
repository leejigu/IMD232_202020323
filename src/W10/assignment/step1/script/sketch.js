class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = 0; // 초기 상태는 바위
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const opponents = this.neighbors.filter((neighbor) => neighbor !== null);
    const rockCount = opponents.filter(
      (neighbor) => neighbor.state === ROCK
    ).length;
    const paperCount = opponents.filter(
      (neighbor) => neighbor.state === PAPER
    ).length;
    const scissorsCount = opponents.filter(
      (neighbor) => neighbor.state === SCISSORS
    ).length;

    if (this.state === ROCK) {
      if (scissorsCount > 2) {
        this.nextState = SCISSORS; // 바위는 가위를 이김
      } else {
        this.nextState = ROCK; // 방어
      }
    } else if (this.state === PAPER) {
      if (rockCount > 2) {
        this.nextState = ROCK; // 보는 바위를 이김
      } else {
        this.nextState = PAPER; // 방어
      }
    } else if (this.state === SCISSORS) {
      if (paperCount > 2) {
        this.nextState = PAPER; // 가위는 보를 이김
      } else {
        this.nextState = SCISSORS; // 방어
      }
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = (this.state + 1) % 3; // 상태를 순환하도록 변경
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    if (this.state === ROCK) {
      fill(255, 0, 255);
    } else if (this.state === PAPER) {
      fill(0, 255, 0); // 보는 초록
    } else if (this.state === SCISSORS) {
      fill(0, 220, 255); // 가위는 파랑
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}
