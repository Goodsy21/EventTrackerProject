import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Round } from '../models/round';

@Injectable({
  providedIn: 'root',
})
export class RoundService {
  url = environment.baseUrl + 'api/rounds';
  constructor(private http: HttpClient) {}

  index(): Observable<Round[]> {
    return this.http.get<Round[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('RoundService.index(): error retrieving Round: ' + err)
        );
      })
    );
  }

  create(round: Round): Observable<Round> {
    return this.http.post<Round>(this.url, round).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('roundService.index(): error creating round item: ' + err)
        );
      })
    );
  }

  update(round: Round): Observable<Round> {
    return this.http.put<Round>(`${this.url}/${round.id}`, round).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'roundService.update(): error updating round item: ' + err
            )
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'roundService.update(): error deleting round item: ' + err
            )
        );
      })
    );
  }
}
