import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss', '../input-style.scss']
})
export class PasswordInputComponent implements OnInit {
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
