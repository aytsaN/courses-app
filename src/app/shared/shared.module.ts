import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { COMPONENTS } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...COMPONENTS,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
