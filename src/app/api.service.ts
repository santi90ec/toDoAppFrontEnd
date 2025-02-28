import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<any>('https://randomuser.me/api/')
    .pipe(
      map(response => response.results.map((user: any) => new User(
        user.name.first,
        user.name.last,
        user.email
      )))
    );
  }
}
