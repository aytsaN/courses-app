import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/shared/components/form/form.component';

type RegistrationData = {
  name: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  info?: Info;

  constructor() {
    this.info = {
      text: `If you have an account you can`,
      linkText: 'Login',
      linkUrl: `#`
    }
  }

  ngOnInit(): void {
  }

  submit(data: RegistrationData) {
    console.log(data);
  }
}
