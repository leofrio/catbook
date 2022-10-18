import { Router } from '@angular/router';
import { LocalstorageService } from './../../services/localstorage/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}
  user$ = of(JSON.parse(this.localstorageService.getLSByKey('loggedUser')));
  ngOnInit(): void {}
  logout(): void {
    this.localstorageService.deleteLSByKey('loggedUser');
    this.router.navigate(['']);
  }
}
