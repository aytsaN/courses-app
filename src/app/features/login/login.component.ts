import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/shared/components/form/form.component';

type LoginData = {
  name: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  info?: Info;

  constructor() {
    this.info = {
      text: `If you don't have an account you can`,
      linkText: 'Registration',
      linkUrl: `#`
    }
  }

  ngOnInit(): void {
  }

  submit(data: LoginData) {
    console.log(data);
  }
}
