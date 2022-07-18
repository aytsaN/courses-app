import { Component, Input, OnInit } from '@angular/core';

export type CourseCard = {
  id: string,
  title: string,
  description: string,
  creationDate: string,
  duration: number,
  authors: Array<string>
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() card?: CourseCard;

  formattedDuration: string;

  constructor() {
    this.formattedDuration = '';
  }

  ngOnInit(): void {
    this.formattedDuration = this.getFormattedDuration(this.card?.duration);
  }

  getFormattedDuration(number?: number): string {
    if (!number) return '';
    const m = number % 60;
    const h = (number - m) / 60;

    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m} hour${h > 1 ? 's' : ''}`;
  }

}
