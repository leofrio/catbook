import { UserExistsService } from './../user-exists/user-exists.service';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';

@Injectable({
  providedIn: 'root',
})
export class SingupService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users', newUser);
  }
  verifyExistingUser(username: String): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/users/${username}`);
  }
}
