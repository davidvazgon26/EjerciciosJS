import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BasicFormValidationsComponent } from './components/basic-form-validations/basic-form-validations.component';
import { BasicFormMaterialiconsComponent } from './components/basic-form-materialicons/basic-form-materialicons.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'basic',
        component: BasicFormComponent,
      },
      {
        path: 'basic2',
        component: BasicFormValidationsComponent,
      },
      {
        path: 'pruebas2',
        component: BasicFormComponent,
      },
      {
        path: 'iconos',
        component: BasicFormMaterialiconsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
