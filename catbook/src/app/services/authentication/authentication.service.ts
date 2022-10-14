import { NewUser } from './../../models/new-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, Subscriber, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class authenticationService {
  constructor(private httpclient: HttpClient) {}
  authenticate(userName: string, password: string): Observable<any> {
    let subject: Subject<any> = new Subject<any>();
    this.httpclient.get('http://localhost:3000/users').subscribe((res) => {
      let users: NewUser[] = [];
      users = res as NewUser[];
      for (let i of users) {
        if (userName === i.userName && password === i.password) {
          subject.next(
            this.httpclient.post('http://localhost:3000/loggedUser', {
              userName: userName,
              password: password,
              fname: i.fname,
              email: i.email,
            })
          );
          console.log('sucessefully logged in!');
          return;
        }
      }
      subject.next(undefined);
      return;
    });
    return subject.asObservable();
  }
}
