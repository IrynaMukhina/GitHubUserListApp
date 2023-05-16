import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {   

    constructor(private httpClient: HttpClient) { }

    getRepositories(login: string, page: number, per_page: number): Observable<any> {

      console.log(login, 'login');
      
      
      return this.httpClient.get(`https://api.github.com/users/${login}/repos?q=page=${page}&per_page=${per_page}`);
      ///repos{?type,page,per_page,sort}x
    }
}