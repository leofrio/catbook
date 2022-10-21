import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
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
  loading: boolean = false;
  constructor(
    private authService: authenticationService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}
  @Output() gotoSignup: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeComponent(): void {
    this.gotoSignup.emit(true);
  }
  login(): void {
    this.loading = true;
    console.log('login: ' + this.userName);
    console.log('password: ' + this.password);
    this.authService.authenticate(this.userName, this.password).subscribe(
      (req) => {
        if (typeof req !== 'undefined') {
          req.subscribe((reqaux: Object) => {
            this.localstorageService.addLSToken('loggedUser', reqaux);
            this.loading = false;
            this.router.navigate(['animals']);
          });
        } else {
          this.loading = false;
          //alert('invalid username or password');
        }
      },
      (error) => {
        this.loading = false;
        alert('invalid username or password');
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
