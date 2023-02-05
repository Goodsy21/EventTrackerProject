import { RoundService } from './../../services/round.service';
import { Component, OnInit } from '@angular/core';
import { Round } from 'src/app/models/round';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css'],
})
export class RoundComponent implements OnInit {
  [x: string]: any;
  rounds: Round[] = [];
  newRound: Round | null = new Round();

  constructor(private roundService: RoundService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.roundService.index().subscribe({
      next: (roundList) => {
        this.rounds = roundList;
      },
      error: (err) => {
        console.error('Error loading rounds: ');
        console.error(err);
      },
    });
  }

  addRound(round: Round) {
    this.roundService.create(round).subscribe({
      next: (data: any) => {
        this.newRound = new Round();
        this.reload();
      },
      error: (nojoy: any) => {
        console.error('RounddListComponent.addRound: error creating round');
        console.error(nojoy);
      },
    });
    this.newRound = new Round();
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

  updateRound(round: Round): void {
    this.roundService.update(round).subscribe({
      error: (err) => {
        console.error('RoundListComponent.updateRound: error updating: ');
      },
    });
  }
}
