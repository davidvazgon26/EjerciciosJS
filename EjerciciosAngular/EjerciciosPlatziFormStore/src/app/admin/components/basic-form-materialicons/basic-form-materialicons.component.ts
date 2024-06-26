import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form-materialicons',
  templateUrl: './basic-form-materialicons.component.html',
  styleUrls: ['./basic-form-materialicons.component.scss'],
})
export class BasicFormMaterialiconsComponent implements OnInit {
  form: FormGroup; // declaramos form y reemplazamos el codigo de aqui y lo mandamos a un metodo privado

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.nameField.valueChanges.subscribe((value) => {
    //   //escuchando un campo
    //   console.log(value);
    // });
    // this.form.valueChanges.subscribe((value) => {
    //   //escuchando el formulario en general.
    //   console.log(value);
    // });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
        last: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      category: [''],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    });
  }

  get nameField() {
    return this.form.get('fullName.name');
  }

  get lastField() {
    return this.form.get('fullName.last');
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }
}
