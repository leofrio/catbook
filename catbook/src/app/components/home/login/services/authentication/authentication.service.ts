import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/components/models/user';

@Injectable({
  providedIn: 'root',
})
export class authenticationService {
  constructor(private httpclient: HttpClient) {}
  authenticate(userName: string, password: string): Observable<any> {
    let subject: Subject<any> = new Subject<any>();
    this.httpclient.get('http://localhost:3000/users').subscribe((res) => {
      let users: User[] = [];
      users = res as User[];
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
