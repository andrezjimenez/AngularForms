import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment'
import { Category } from './../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http:  HttpClient,
  ) { }

    getAllCategories() {
      return this.http.get<Category>(`${environment}/categories/`);
    }

    createCategory (data: Partial<Category>) {
      console.log(environment);
      return this.http.post<Category>(`https://store.nicobytes.site/api/categories/`,data);
    }

    updateCategory (id: string ,data: Partial<Category>) {
      return this.http.put<Category>(`${environment}/categories/${id}`,data);
    }
}
