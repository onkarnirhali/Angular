import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  isActive = false;
  email: "me@onkar.com";
  @Input() isFavourite: boolean;

  car = {
    companyName:"Suzuki",
    cost:234000,
    seats:5,
    fuel:"electric",
    rating:3.7895,
    isFavourite: true

  }

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'},
  ];

  onAdd() {
    this.courses.push( { id:4, name:"course5"} )
  }

  log(x) { console.log(x);
   }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }
 
  post = {
    title: "Hello World",
    isFavorite: true
  }

  public onClick($event) {
    //console.log("On Click triggerd", event);
    event.stopPropagation();
  }

  public onKeyUp() {
      console.log('Event is : =>',this.email );
  }

  public onDivClick() {
    console.log("On div Click triggerd", event);
  }

  public onClickFav() {
    this.isFavourite = !this.isFavourite;
  }

  constructor() { }

  ngOnInit(): void {
  }

 

}
