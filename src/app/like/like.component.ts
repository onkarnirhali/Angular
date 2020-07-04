import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit(): void {}
}
