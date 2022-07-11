import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss', '../input-style.scss']
})
export class EmailInputComponent implements OnInit {
  @Input() form: any;
  @Input() control?: AbstractControl;
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
