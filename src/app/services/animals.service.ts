import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DogImage } from '../interfaces/dog-image.interface';
import { BreakingBadQuote } from '../interfaces/breaking-bad-quote.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';
  private breakingBadQuoteApiUrl =
    'https://api.breakingbadquotes.xyz/v1/quotes/5';
  constructor(private http: HttpClient) {}

  public getAnimals(): Observable<DogImage> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.status);
        return EMPTY;
      }),
    );
  }
  public getBreakingBadQuote(): Observable<BreakingBadQuote[]> {
    return this.http.get<BreakingBadQuote[]>(this.breakingBadQuoteApiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.status);
        return EMPTY;
      }),
    );
  }
}
