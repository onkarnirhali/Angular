import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorite: boolean;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.favorite = !this.favorite;
  }

}
