import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Info } from 'src/app/shared/components/form/form.component';
import { validateEmail } from 'src/app/shared/directives/email-validator.directive';

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
  registrationForm: FormGroup;
  title: string = 'Registration';
  formInfo: Info = {
    text: `If you have an account you can`,
    linkText: 'Login',
    linkUrl: `#`
  };
  user: RegistrationData = {
    name: '',
    email: '',
    password: ''
  }


  constructor() {
    this.registrationForm = this.createForm();
  }

  ngOnInit(): void {
  }

  get name() { return this.registrationForm.get('name'); }

  get email() { return this.registrationForm.get('email'); }

  get password() { return this.registrationForm.get('password'); }

  createForm() {
    return new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        validateEmail
      ]),
      password: new FormControl(this.user.password, Validators.required)
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onFormSubmit(data: RegistrationData) {
    if (this.registrationForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.registrationForm);
    }
  }
}
