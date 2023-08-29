import { Component } from '@angular/core';

// import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';
  imgRta = '';

  constructor(
    // private authService: AuthService,
    private userService: UsersService,
    private filesService: FilesService
  ) {}

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.userService
      .create({
        name: 'David',
        email: 'david@ejemplo.com',
        password: '123456',
      })
      .subscribe((rta) => {
        console.log(rta);
      });
  }

  downloadPDF() {
    this.filesService
      .getFile(
        'my.pdf',
        'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
        'application/pdf'
      )
      .pipe(
        catchError((error) => {
          // Aquí puedes manejar el error de la manera que desees
          console.error('Error al descargar el archivo PDF:', error);
          // Puedes lanzar un mensaje de error al usuario, por ejemplo
          // this.showErrorMessage('No se pudo descargar el archivo PDF');
          // O simplemente retornar un observable vacío para que la cadena continúe
          return EMPTY;
        })
      )
      .subscribe();
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFIles(file).subscribe((rta) => {
        this.imgRta = rta.location;
      });
    }
  }

  // login() {
  //   this.authService.login('david@ejemplo.com', '123456').subscribe((rta) => {
  //     console.log(rta.access_token);
  //     this.token = rta.access_token;
  //   });
  // }

  // getProfile() {
  //   this.authService.profile(this.token).subscribe((profile) => {
  //     console.log(profile);
  //   });
  // }
}
