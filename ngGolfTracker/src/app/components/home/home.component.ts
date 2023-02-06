import { Component } from '@angular/core';
import { AveragesPipe } from 'src/app/averages-pipe';
import { Round } from 'src/app/models/round';
import { RoundService } from 'src/app/services/round.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  [x: string]: any;
  rounds: Round[] = [];
  averages = {
    totalScore: 0,
    avgScore: 0,
    totalFees: 0,
    avgFee: 0,
    totalBalls: 0,
    avgBalls: 0,
    totalBevs: 0,
    avgBevs: 0,
  };
  newRound: Round | null = new Round();

  constructor(
    private roundService: RoundService,
    private averagesPipe: AveragesPipe
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.roundService.index().subscribe({
      next: (roundList) => {
        this.rounds = roundList;
        this.averages = this.averagesPipe.transform(roundList);
      },
      error: (err) => {
        console.error('Error loading rounds: ');
        console.error(err);
      },
    });
  }

  deleteRound(id: number) {
    this.roundService.destroy(id).subscribe({
      next: () => {
        this.deleteRound;
        this.reload();
      },
      error: (fail) => {
        console.error('RoundListComponent.deleteRound: error handling');
        console.error(fail);
      },
    });
  }

  // updateRound(round: Round): void {
  //   this.roundService.update(round).subscribe({
  //     next: (data: any) => {
  //       this.updateRound(round);
  //       this.reload();
  //     },
  //     error: (err) => {
  //       console.error('RoundListComponent.updateRound: error updating: ');
  //     },
  //   });
  // }
}
