import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';

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
  faCat = faCat;
  user$ = this.localstorageService.getObservableOfLastEnteredKey();
  ngOnInit(): void {}
  logout(): void {
    this.localstorageService.deleteLSByKey('loggedUser');
    this.router.navigate(['home']);
  }
}
