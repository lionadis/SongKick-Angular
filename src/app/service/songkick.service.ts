import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Artist } from '../models/artist.model';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class SongkickService {

  urlArtist = 'http://api.songkick.com/api/3.0/search/artists.json';
  apiKey = 'io09K9l3ebJxmxe2'
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  searchArtist(term: string): Observable<Artist[]> {
    if(!term.trim()){
      return of([]);
    } else {
      const httpOptions = {
        params: new HttpParams().set('query', `${term}`).set('apikey', `${this.apiKey}`)
      };
      return this.http.get<Artist[]>(`${this.urlArtist}`, httpOptions)
        .pipe(
          map(res => {
            if( Object.entries(res['resultsPage'].results).length === 0 &&
                  res['resultsPage'].results.constructor === Object ){
                    return new Array<Artist>();
            } else {
              return res['resultsPage'].results.artist.map(item => {
                return new Artist(item.id, item.displayName);
              })
            }
          }),
          catchError(this.handleError('searchArtist', []))
        )
    }
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(message);
  }
}
