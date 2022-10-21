import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state?.['signup']);
    if (this.router.getCurrentNavigation()?.extras.state?.['signup']) {
      this.goToSignup(
        this.router.getCurrentNavigation()?.extras.state?.['signup']
      );
    }
    if (this.router.getCurrentNavigation()?.extras.state?.['login']) {
      this.goToLogin(
        this.router.getCurrentNavigation()?.extras.state?.['login']
      );
    }
  }
  displayLogin: boolean = true;
  displaySignup: boolean = false;
  goToLogin(event: boolean) {
    this.displaySignup = !event;
    this.displayLogin = event;
  }
  goToSignup(event: boolean) {
    this.displayLogin = !event;
    this.displaySignup = event;
  }

  ngOnInit(): void {}
}
