import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from '../../data/mocks';
import { CourseBtnAction } from './components/course-list/course-list.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  infoTitle: string = '';
  infoText: string = '';
  infoBtnText: string = '';
  headerBtnText: string = '';
  headerUserName: string = '';

  courseListData = mockedCourseList;

  constructor() { }

  ngOnInit(): void {
    this.headerUserName = 'Dave';
    this.headerBtnText = 'Logout';
    this.infoBtnText = 'Add new course';
    this.infoTitle = 'Your list is empty';
    this.infoText = `Please use the '${this.infoBtnText}' button to add your first course`;
  }

  openModal() {
    console.log('btn click');
  }

  courseAction(action: CourseBtnAction) {
    console.log(action);
  }
}
