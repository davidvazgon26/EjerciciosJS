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
// import { count } from 'rxjs';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input() img = 'valor init de img';
  @Output() loaded = new EventEmitter<string>();
  imageDefault =
    'https://www.travesseradedalt.barcelona/wp-content/uploads/profile-default-male.png';
  // counter = 0;
  // counterFn: number | undefined;

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
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    //after render
    // handler children
    console.log('AfterViewInit', 'imgValue =>', this.img);
  }

  ngOnDestroy(): void {
    //Delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Loaded desde el hijo');
    this.loaded.emit(this.img);
  }
}
