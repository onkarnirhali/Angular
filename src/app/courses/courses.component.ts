import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  isActive = false;
  public onClick($event) {
    console.log("On Click triggerd", event);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

 

}
