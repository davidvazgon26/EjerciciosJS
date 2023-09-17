import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from './../../../../core/services/categories.service';
// import { MyValidators } from 'src/app/utils/validators';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.categoryId = params.id; //Se usa en este ejemplo id, pero varia segun el nombre del parametro.
      // if (this.categoryId) {
      if (params.id) {
        this.getCategory(params.id);
      }
    });
  }

  createCategory(data) {
    this.categoriesService.createCategory(data).subscribe((rta) => {
      // console.log('Se creo registro ', rta);
      this.router.navigate(['/admin/categories']);
    });
  }

  updateCategory(data) {
    // const data = this.form.value;
    // console.log('update id: ', this.category.id);
    this.categoriesService
      // .updateCategory(this.categoryId, data)
      .updateCategory(this.category.id, data)
      .subscribe((rta) => {
        // console.log('Se actualizo registro ', rta);
        this.router.navigate(['/admin/categories']);
      });
  }

  private getCategory(id: string) {
    // this.categoriesService.getCategory(this.categoryId).subscribe((data) => {
    this.categoriesService.getCategory(id).subscribe((data) => {
      // this.form.patchValue(data);
      this.category = data;
    });
  }
}
