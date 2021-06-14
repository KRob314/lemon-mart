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
  template: `
   <div *ngIf="displayLogin">
     <app-login></app-login>
     </div>
     <div *ngIf="!displayLogin">
       <span class="mat-display-3">You get a lemon, you get a lemon, you get a lemon.</span>
       </div>
    <div fxLayout="column" fxLayoutAlign="center center">
      <div class="mat-display-2">Hello, Limoncu!</div>
      <button mat-raised-button color="primary" (click)="login()" >Login as manager</button>
    </div>
  `
})
export class HomeComponent implements OnInit {
  displayLogin = true;

  constructor(private authService: AuthService, private router: Router) { }

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
