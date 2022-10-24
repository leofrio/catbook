import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() currentVal: string = '0';
  @Input() barType: string = 'bg-danger';
  @Input() barMessage: string = 'weak';
  constructor() {}

  ngOnInit(): void {}
}
