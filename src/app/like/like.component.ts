import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  constructor() { }

  isLiked: boolean;
  courses = [1];
  viewMode = 'map';

  ngOnInit(): void {
  }

  onClickLiked () {
    this.isLiked = !this.isLiked;
  }

}
