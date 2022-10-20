import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { authenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  constructor(
    private authService: authenticationService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}

  login(): void {
    //laoding=true
    console.log('login: ' + this.userName);
    console.log('password: ' + this.password);
    this.authService.authenticate(this.userName, this.password).subscribe(
      (req) => {
        if (typeof req !== 'undefined') {
          req.subscribe((reqaux: Object) => {
            this.localstorageService.addLSToken('loggedUser', reqaux);
            //lkoading=false
            this.router.navigate(['animals']);
          });
        } else {
          alert('invalid username or password');
        }
      },
      (error) => {
        alert('invalid username or password');
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
