import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-input',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss', '../input-style.scss']
})
export class EmailInputComponent implements OnInit {
  @Input() form: any;
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
