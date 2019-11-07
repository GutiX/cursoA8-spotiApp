import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("Spotify service listo.");
  }

  getNewReleases() {
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAMt8_-pvyCRUxvg616xcVPbMeogpZnlLSq3aHE6lHqnSb1ohu4cRldDx2xwmvjK6ii7wIgzxE899bclRQ'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      
  }
}
