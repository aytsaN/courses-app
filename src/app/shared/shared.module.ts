import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { COMPONENTS } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PIPES } from './pipes';
import { DIRECTIVES } from './directives';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule { }
