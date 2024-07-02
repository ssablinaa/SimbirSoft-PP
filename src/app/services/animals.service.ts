import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private apiUrl = 'https://dog.ceo/api/breeds/image/random';
  private breakingBadQuoteApiUrl =
    'https://api.breakingbadquotes.xyz/v1/quotes/5';
  constructor(private http: HttpClient) {}

  public getAnimals(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.status);
        return EMPTY;
      }),
    );
  }
  public getBreakingBadQuote(): Observable<any> {
    return this.http.get<any>(this.breakingBadQuoteApiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.status);
        return EMPTY;
      }),
    );
  }
}
