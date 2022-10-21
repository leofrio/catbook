import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
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
