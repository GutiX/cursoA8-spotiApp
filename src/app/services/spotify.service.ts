import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo.');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer QAnIdz6xkbMvsjQAbQl5YDZxoMwKpJ9Da4BE0Ca9pRXLcwAIE0m0ihiWxWEUviVrcdIuecL8sWF_ftj7qE'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
            .pipe( map( data => data['albums'].items ));
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map( data => data['artists'].items ));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
            .pipe( map( data => data['tracks'] ));
  }
}
