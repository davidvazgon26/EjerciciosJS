import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  // http://www.w3schools.com/howto/img_avatar.png

  

  onLoaded(img: String) {
    console.log('Recibiendo en el padre la confirmacion del loaded', img);
  }
}
