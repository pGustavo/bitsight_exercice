import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from '@app/models/users.model';
import {Repository} from '@app/models/repository.model';

@Injectable()
export class GitService {

  constructor(private _http: HttpClient) {
    console.log('User Service Started...');
  }

  getAllUsersByFollowers(query: string, sort: string) {
    return this._http.get<User[]>('https://api.github.com/search/users?' + 'q=' + query + '&sort=' + sort);
  }

  getAllRepositoriesByStars(query: string, sort: string) {
    return this._http.get<Repository[]>('https://api.github.com/search/repositories?' + 'q=' + query + '&sort=' + sort);
  }
  getJson(link) {
    return this._http.get(link);
  }
}
