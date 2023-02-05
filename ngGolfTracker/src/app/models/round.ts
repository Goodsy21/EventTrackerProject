export class Round {
  id: number;
  score: number;
  beveragesConsumed: number;
  lostBalls: number;
  greenFee: number;
  course: string;

  constructor(
    id: number = 0,
    score: number = 0,
    beveragesConsumed: number = 0,
    lostBalls: number = 0,
    greenFee: number = 0,
    course: string = ''
  ) {
    this.id = id;
    this.beveragesConsumed = beveragesConsumed;
    this.course = course;
    this.lostBalls = lostBalls;
    this.score = score;
    this.greenFee = greenFee;
  }
}
