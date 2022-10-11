import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/models/new-user';

@Injectable({
  providedIn: 'root',
})
export class SingupService {
  constructor(private httpClient: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.httpClient.post('https://localhost:3000/user/singup', newUser);
  }
}
