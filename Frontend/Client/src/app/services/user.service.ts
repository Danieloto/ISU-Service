import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:53903/api/user';

  constructor(private http: HttpClient) { }

  GetAllUsers(): void {
    this.http.get(this.url).subscribe(val => {
      console.log(val);
    });
  }

  GetSpecificUser(id: number): void {
    this.http.get(this.url + '/' + id).subscribe(val => {
      console.log(val);
    });
  }

}
