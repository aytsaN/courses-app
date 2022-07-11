import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss', '../input-style.scss']
})
export class NameInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.control);
  }

}
