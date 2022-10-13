import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';

@Injectable({
  providedIn: 'root',
})
export class SingupService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post('https://localhost:3000/user/singup', newUser);
  }
  verifyExistingUser(username: String): Observable<any> {
    return this.httpClient.get(
      `https://localhost:3000/user/exists/${username}`
    );
  }
}
