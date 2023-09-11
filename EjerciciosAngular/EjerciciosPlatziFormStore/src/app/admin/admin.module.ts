import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BasicFormValidationsComponent } from './components/basic-form-validations/basic-form-validations.component';
import { BasicFormMaterialiconsComponent } from './components/basic-form-materialicons/basic-form-materialicons.component';

@NgModule({
  declarations: [
    NavComponent,
    BasicFormComponent,
    BasicFormValidationsComponent,
    BasicFormMaterialiconsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
