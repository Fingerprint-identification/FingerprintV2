import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, filter, map, Observable, of, Subject, switchMap, tap, throwError } from 'rxjs';

export interface city {
    name: string;
    latest: string;
}

/**
* Inject root
*/
@Injectable({
    providedIn: 'root'
})

/**
* Class for search services that geet cities from api
*/
export class SearchService {

    /**
     * Local referance to store copy of the cities
     */
     cities$!: Observable<city[]>;
    /**
     *  Local reference for url to get cities
     */
    baseUrl = 'https://api.cdnjs.com/libraries';
    /**
     * Search query to put in url
     */
    queryUrl = '?search=';

    /**
     * Constructor
     * @param http
     */
    constructor(private http: HttpClient) {
    }
    /**
     * 
     * @param term city you need to search about
     */
    searchCity(term: string): Observable<city[]> {
        let url = `${this.baseUrl}${this.queryUrl}${term}`;
        if (!term.trim()) {
            this.cities$ = of([]);
            return this.cities$;
        }
        this.cities$ = this.http.get<city[]>(url);
        return this.cities$.pipe(
            catchError(this.handleError<city[]>('Cities', []))
        );;
        
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`failed: ${error.message}`);
            return of(result as T);
        };
    }
    ReturnSpecificCity(){
     console.log(this.cities$)
    }
}

