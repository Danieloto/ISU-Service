import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offering, CreateOffering } from '../models/card.model';
import { RequestDTO } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {

  private url = 'http://proj309-win12.misc.iastate.edu/api/offering';

  constructor(private http: HttpClient) { }

  GetRequestsByUser(userId: number): any {
    return this.http.get<Request[]>(this.url + '/get-requests-by-user/' + userId);
  }

  GetOfferings(): Observable<Offering[]> {
    return this.http.get<Offering[]>(this.url);
  }

  GetOfferingById(id: number): Observable<Offering> {
    return this.http.get<Offering>(this.url + '/' + id);
  }

  GetOfferingByUser(userId: number): Observable<Offering[]> {
    return this.http.get<Offering[]>(this.url + '/by-user/' + userId);
  }

  PostOffering(offering: CreateOffering): Observable<CreateOffering> {
    console.log(offering);
    return this.http.post<CreateOffering>(this.url, offering);
  }

  Delete(id: number): Observable<Offering> {
    return this.http.delete<Offering>(this.url + '/' + id);
  }

  Request(request: RequestDTO): Observable<RequestDTO> {
    console.log(this.url + '/request');
    return this.http.post<RequestDTO>(this.url + '/request', request);
  }

}
