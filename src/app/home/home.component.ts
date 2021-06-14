import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  styles: [`
    div[fxLayout] {margin-top: 32px;}
  `],
  template:`
  <div *ngIf="(authService.authStatus$ | async)?.isAuthenticated; else doLogin">
    <div class="mat-display-4">
      This is LemonMart! The place where
    </div>
    <div class="mat-display-4">
      You get a lemon, you get a lemon, you get a lemon...
    </div>
    <div class="mat-display-4">
      Everybody gets a lemon.
    </div>
  </div>
  <ng-template #doLogin>
    <app-login></app-login>
  </ng-template>
`
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit (): void{ }

  login ()
  {
    console.log('login');
    console.log(this.authService.currentUser$);
    console.log(this.authService.authStatus$);

    this.authService.login('manager@test.com', '12345678')
    this.router.navigate(['/manager']);

/*     combineLatest([this.authService.authStatus$, this.authService.currentUser$]).pipe(
      filter(([authStatus, user]) =>
        authStatus.isAuthenticated && user?._id !== ''
      ),
      tap(([authStatus, user]) =>
      {
        console.log('route');
        this.router.navigate(['/manager'])
      })
  ).subscribe() */
}

}
