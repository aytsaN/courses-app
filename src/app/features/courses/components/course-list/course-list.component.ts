import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseCard } from '../course-card/course-card.component';

export type CourseBtnAction = 'show' | 'edit' | 'remove';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  @Input() courseList: CourseCard[] = [];
  @Input() isEditable: boolean = false;

  @Output() courseAction = new EventEmitter();

  cardBtnText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.cardBtnText = 'Show course';
  }

  handleAction(action: CourseBtnAction) {
    this.courseAction.emit(action);
  }
}
