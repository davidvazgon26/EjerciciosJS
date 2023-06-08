import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'David';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  obj = {
    lastName: 'Vazquez',
    Job: 'Developer',
    Hobbie: 'Futbol',
  };

  names: string[] = ['David', 'Alejandro', 'Daniel'];
  newName = '';

  btnDisable = true;

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  Incrementar() {
    this.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
