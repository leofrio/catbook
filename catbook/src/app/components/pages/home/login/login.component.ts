import { throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticationModule } from 'src/app/services/authentication/authentication.module';
import { authenticationService } from 'src/app/services/authentication/authentication.service';

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
    private router: Router
  ) {}

  login(): void {
    console.log('login: ' + this.userName);
    console.log('password: ' + this.password);
    this.authService.authenticate(this.userName, this.password).subscribe(
      (req) => {
        if (typeof req !== 'undefined') {
          req.subscribe(() => {
            console.log(req);
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
