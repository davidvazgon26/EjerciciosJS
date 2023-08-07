import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() img: string = 'valor init de img';
  @Output() loaded = new EventEmitter<String>();
  imageDefault =
    'https://www.travesseradedalt.barcelona/wp-content/uploads/profile-default-male.png';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Loaded desde el hijo');
    this.loaded.emit(this.img);
  }
}
