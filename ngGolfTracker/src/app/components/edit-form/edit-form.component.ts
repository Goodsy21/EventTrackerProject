import { AveragesPipe } from './../../averages-pipe';
import { RoundService } from './../../services/round.service';
import { Component, OnInit } from '@angular/core';
import { Round } from 'src/app/models/round';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  rounds: Round[] = [];
  roundToUpdate: Round = {
    id: 0,
    score: 0,
    beveragesConsumed: 0,
    lostBalls: 0,
    greenFee: 0,
    course: '',
  };
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
  round: Round | undefined;
  route: any;
  constructor(
    private currentRoute: ActivatedRoute,
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

  updateRound(): void {
    let roundId: string | null =
      this.currentRoute.snapshot.paramMap.get('round.id');
    if (roundId == null) {
      roundId = '';
    }
    let roundIdNum = parseInt(roundId);
    this.roundToUpdate.id = roundIdNum;
    this.roundService.update(this.roundToUpdate).subscribe({
      next: (data: any) => {
        this.updateRound();
        window.location.reload();
      },
      error: (err) => {
        console.error('RoundListComponent.updateRound: error updating: ');
      },
    });
  }
}
