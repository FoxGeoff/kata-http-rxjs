import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  searchCountryByName(name: string): Observable<Country[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append(
      'X-RapidAPI-Key',
      '1108554cc1mshf11c17c4fea2b3dp179054jsn2446fb7a8965'
    );
    return this.httpClient.get(
      `https://restcountries-v1.p.rapidapi.com/capital/` + name,
      { headers: headers }
    ).pipe(
      map((data: Country[]) => {
        return data;
      }), catchError(error => {
        return throwError('Capital not found!');
      })
    )
  }

}
