import { Component } from '@angular/core';
import { AveragesPipe } from 'src/app/averages-pipe';
import { Round } from 'src/app/models/round';
import { RoundService } from 'src/app/services/round.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
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

  addRound(round: Round) {
    console.log('testng log');

    this.roundService.create(round).subscribe({
      next: (data: any) => {
        this.newRound = new Round();
        window.location.reload();
      },
      error: (nojoy: any) => {
        console.error('RounddListComponent.addRound: error creating round');
        console.error(nojoy);
      },
    });
    this.newRound = new Round();
  }
}
