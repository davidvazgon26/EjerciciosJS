import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.models';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  token = '';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService
      .login('david@ejemplo.com', '123456')
      .pipe(
        switchMap((token) => {
          this.token = token.access_token;
          return this.authService.profile(token.access_token);
        })
      )
      .subscribe((user) => {
        this.profile = user;
      });
  }

  getProfile() {
    this.authService.profile(this.token).subscribe((profile) => {
      console.log(profile);
    });
  }
}
