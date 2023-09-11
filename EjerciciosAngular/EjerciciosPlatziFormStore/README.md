# PlatziStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.11.

Curso: https://platzi.com/clases/2027-angular-forms/32606-presentacion-del-proyecto-tour-por-los-formularios/

## Migraciones entre versiones de angular en: https://update.angular.io/

## Development server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Mas informacion (en espaniol)

### Crear componentes:

    ng g c nombre

### Crear servicio:

    ng g s nombre

### [ngModules]

    * Para usar formControl hay que importarlo en nuestra logica (archivo .ts)
     * import { FormControl } from '@angular/forms';
     * No olvides agregar los nuevos componentes a las rutas en el archivo: admin-routing.module.ts
     * No olvides que para usar ReactiveFormsModule hay que hacer la importacion en admin.modules.ts
    * Se declara una variable en nuestra logica para enlazarla con nuestro front
        ejemplo logica :
            `iemailField = new FormControl('');`
        ejemplo front:
            `<p>
            Email: {{emailField.value}}
            <br>
            <input type="email" [formControl]="iemailField">`
            </p>`

        * otro ejemplo para habilitar /inhabilitar boton:

            ejemplo logica :
                `
                inameField = new FormControl('', [
                Validators.required,
                Validators.maxLength(10),]);
                `
             ejemplo front:
                `
                 <button [disabled]="nameField.invalid" (click)="getValuenameField()">Obtener Valor</button>
                `
        * otro ejemplo ahora de CSS

                `
                   <input [class.is-valid]="isNameFieldValid" [class.is-invalid]="isNameFieldInvalid" type="text" formControlName="name">
                `

Hay mas ejemplos de como usar los tag HTML y angular en el front, puedes verlo en el archivo:
basic-form.component.html

### Validadores

Exysten 11 validadores que puedes utilizar en tus formularios:
_ min and max |  
_ required and requiredTrue |  
_ email |  
_ minLength and maxLength |  
_ pattern para expresiones regulares |  
_ nullValidator |  
_ compose |  
_ composeAsync |
