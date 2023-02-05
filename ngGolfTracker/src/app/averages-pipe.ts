import { Pipe, PipeTransform } from '@angular/core';
import { Round } from './models/round';

@Pipe({
  name: 'average',
})
export class AveragesPipe implements PipeTransform {
  transform(rounds: Round[]) {
    let averages = {
      totalScore: 0,
      avgScore: 0,
      totalFees: 0,
      avgFee: 0,
      totalBalls: 0,
      avgBalls: 0,
      totalBevs: 0,
      avgBevs: 0,
    };
    for (let i = 0; i <= rounds.length; i++) {
      averages.totalScore += rounds[i].score;
      averages.avgScore = averages.totalScore / rounds.length;
      averages.totalFees += rounds[i].greenFee;
      averages.avgFee = averages.totalFees / rounds.length;
      averages.totalBalls += rounds[i].lostBalls;
      averages.avgBalls = averages.totalFees / rounds.length;
      averages.totalBevs += rounds[i].beveragesConsumed;
      averages.avgBevs = averages.totalFees / rounds.length;
    }
    return averages;
  }
}
