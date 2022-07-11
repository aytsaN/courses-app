import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type Info = {
  text: string,
  linkText?: string,
  linkUrl?: string
};

type FormData = {
  email: string,
  password: string,
  name?: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formClass: string = '';
  @Input() title: string = '';
  @Input() btnText: string = '';
  @Input() info?: Info;
  @Input() isRegistrationPage?: boolean = false;

  @Output() submit = new EventEmitter();

  infoText?: string;
  infoLinkText?: string;
  infoLinkUrl?: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.info) {
      ({ text: this.infoText, linkText: this.infoLinkText, linkUrl: this.infoLinkUrl } = this.info as Info);
    }
  }

  onFormSubmit(data: FormData) {
    this.submit.emit(data);
  }
}
