import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'; // Interfaz para unir componentes propios al formBuilder

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  // agregar providers necesarios para ControlValueAccessor
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperComponent),
      multi: true,
    },
  ],
})
export class StepperComponent implements OnInit, ControlValueAccessor {
  currentValue = 5;

  //Comportamiento por default, si necesitas que haga algo adicional aqui metes la logica
  onChange = (_: any) => {};
  onTouch = () => {};
  isDisable: boolean;

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.currentValue += 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }
  sub() {
    this.currentValue -= 1;
    this.onTouch();
    this.onChange(this.currentValue);
  }

  /* Metodos por defecto del ControlValueAccessor*/
  /*
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {}
*/

  writeValue(value: number): void {
    if (value) {
      this.currentValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }
}
