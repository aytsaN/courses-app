import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true,
   }]
})
export class EmailValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return validateEmail(control);
  }
}

export function validateEmail(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  return emailValidator(control.value) ? null : { forbiddenEmail: { value: control.value } };
}

function emailValidator(email: string): RegExpMatchArray | null {
  return (email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
