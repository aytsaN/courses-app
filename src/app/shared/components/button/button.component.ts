import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnText?: string;
  @Input() btnIcon?: 'faPen' | 'faTrash';

  faIcon?: IconDefinition;

  constructor() { }

  ngOnInit(): void {
    if (this.btnIcon) {
      switch (this.btnIcon) {
        case 'faPen':
          this.faIcon = faPen;
          break;
        case 'faTrash':
          this.faIcon = faTrash;
          break;
      }
    }
  }

}
