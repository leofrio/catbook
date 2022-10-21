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
  showSucessToast = false;
  showFailureToast = false;
  constructor(
    private authService: authenticationService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}
  @Output() gotoSignup: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeComponent(): void {
    this.gotoSignup.emit(true);
  }
  showToastSucess(sucess: boolean): void {
    if (sucess) {
      this.showSucessToast = true;
      timer(2000);
      this.showSucessToast = false;
    } else {
      this.showFailureToast = true;
      timer(2000);
      this.showFailureToast = false;
    }
  }
  login(): void {
    //laoding=true
    console.log('login: ' + this.userName);
    console.log('password: ' + this.password);
    this.authService.authenticate(this.userName, this.password).subscribe(
      (req) => {
        if (typeof req !== 'undefined') {
          req.subscribe((reqaux: Object) => {
            this.localstorageService.addLSToken('loggedUser', reqaux);
            this.showToastSucess(true);
            timer(2500);
            this.router.navigate(['animals']);
          });
        } else {
          this.showToastSucess(false);
          //alert('invalid username or password');
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
