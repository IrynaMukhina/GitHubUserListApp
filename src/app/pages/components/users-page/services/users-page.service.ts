import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {   

    constructor(private httpClient: HttpClient) { }

    getUsers(page: number, per_page: number): Observable<any> {
      
      return this.httpClient.get(`https://api.github.com/search/users?q=type:user&page=${page}&per_page=${per_page}`)
    }

    getUser(login: string): Observable<any> {
      return this.httpClient.get(`https://api.github.com/users/${login}`);
      ///repos?q=page=${page}&per_page=${per_page}
      ///repos{?type,page,per_page,sort}x

    }
}