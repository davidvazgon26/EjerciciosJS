import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup; // declaramos form y reemplazamos el codigo de aqui y lo mandamos a un metodo privado

  /*
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl(12),
    category: new FormControl(''),
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });
  */

  inameField = new FormControl(' ', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  iemailField = new FormControl('');
  iphoneField = new FormControl('');
  idateField = new FormControl('');
  icolorField = new FormControl('#000000');
  iageField = new FormControl(12);

  icategoryField = new FormControl('category-3');
  itagField = new FormControl('category-3');

  iagreeField = new FormControl(false);
  igenderField = new FormControl('');
  izoneField = new FormControl('');

  constructor(private FormBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      //escuchando un campo
      console.log(value);
    });
    this.form.valueChanges.subscribe((value) => {
      //escuchando el formulario en general.
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  getValuenameField() {
    console.log(this.nameField.value);
  }

  get isNameFieldValidInicial() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalidInicial() {
    return this.nameField.touched && this.nameField.invalid;
  }

  // Para el formulario agrupado

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    // form = new FormGroup({
    this.form = this.FormBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      color: ['#000000'],
      date: [''],
      age: [18, [Validators.required, Validators.min(18), Validators.max(99)]],
      category: [''],
      tag: [''],
      agree: [false, [Validators.requiredTrue]],
      gender: [''],
      zone: [''],
    });
  }

  get nameField() {
    return this.form.get('name');
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
