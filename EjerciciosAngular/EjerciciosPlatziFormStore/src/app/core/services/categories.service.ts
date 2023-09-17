import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from './../models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    let result = this.http.get<Category[]>(
      `${environment.url_api}/categories/`
    );
    // console.log('getAllCategories de categories.service: ', result);
    return result;
  }

  getCategory(id: string) {
    return this.http.get<Category>(`${environment.url_api}/categories/${id}`);
  }

  createCategory(data: Partial<Category>) {
    console.log('createCategory', data);
    return this.http.post<Category>(`${environment.url_api}/categories`, data);
  }

  updateCategory(id: string, data: Partial<Category>) {
    // console.log('updateCategory', data);
    return this.http.put<Category>(
      `${environment.url_api}/categories/${id}`,
      data
    );
  }

  checkCategory(name: string) {
    console.log('checkCategory');
    console.log(name);
    let result = this.http.post(
      `${environment.url_api}/categories/availability`,
      {
        name,
      }
    );
    console.log('result: ', result);

    return result;
  }
}
