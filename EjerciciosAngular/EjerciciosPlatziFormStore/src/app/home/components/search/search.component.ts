import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl();
  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => this.getData(value));
  }

  private getData(query: string) {
    const API = 'KnaQ5WNHYkBvIlfd1A2jkJrEYFM2bKg0';

    this.http
      .get(
        `https://api.giphy.com/v1/stickers/search?api_key=${API}&q=${query}&limit=10&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
      )
      .pipe(
        map((response: any) => {
          return response.data.map((item) => item.images.fixed_height_small);
          // return response.data.map((item) => item.images.downsized);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.results = data;
      });
  }
}
