import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input() img: string = 'valor init de img';
  @Output() loaded = new EventEmitter<String>();
  imageDefault =
    'https://www.travesseradedalt.barcelona/wp-content/uploads/profile-default-male.png';

  constructor() {
    //before render
    // No correr cosas asincronas
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    //Before render
    // Changes inputs -
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit() {
    //Before render
    // Aqui corremos cosas asincronas como fetch y solo corre una vez.
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //after render
    // handler children
    console.log('AfterViewInit', 'imgValue =>', this.img);
  }

  ngOnDestroy(): void {
    //Delete
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Loaded desde el hijo');
    this.loaded.emit(this.img);
  }
}
