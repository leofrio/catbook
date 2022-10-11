import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css'],
})
export class AnimalsListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
}
