import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input() message: string = 'This is a toast'; // This is the string the template is already bound to
  @Input() showsToast: boolean = true; // This is what toggles the component to show or hide

  constructor() {}

  ngOnInit(): void {}
}
