import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NasaIOD } from '../models/nasa.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private NASA_API_URL = 'https://api.nasa.gov';
  private NASA_API_KEY = 'P93kl1SiAJu8YUW67WJbjlSXCo8gpg4HDhUwWl0p';

  constructor(private http: HttpClient) { }

  public GetNasaImageOfTheDay(): Observable<NasaIOD> {
    return this.http.get<NasaIOD>(`${this.NASA_API_URL}/planetary/apod?api_key=${this.NASA_API_KEY}`);
  }

}
