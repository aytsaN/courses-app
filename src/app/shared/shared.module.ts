import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './directives/email-validator.directive';

const COMPONENTS: any[] = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
