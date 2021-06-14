import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <mat-toolbar color="primary"  fxLayoutGap="8px" class="app-toolbar"
  *ngIf="{
        status: authService.authStatus$ | async,
        user: authService.currentUser$ | async
      } as auth;">
    <button mat-icon-button *ngIf="auth?.status?.isAuthenticated"><mat-icon>menu</mat-icon></button>
    <mat-icon svgIcon="lemon"></mat-icon>
    <a mat-button routerLink="/home"><h1>LemonMart</h1></a>
    <span class="flex-spacer"></span>
    <button mat-mini-fab routerLink="/user/profile" matTooltip="Profile" aria-label="User Profile" *ngIf="auth?.status?.isAuthenticated">
    <img *ngIf="auth?.user?.picture" class="image-cropper" [src]="auth?.user?.picture" />
    <mat-icon *ngIf="!auth?.user?.picture">account_circle</mat-icon>
    </button>
    <button mat-mini-fab routerLink="/user/logout" matTooltip="Logout" aria-label="Logout" *ngIf="auth?.status?.isAuthenticated">
      <mat-icon>lock_open</mat-icon>
    </button>
  </mat-toolbar>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'lemon-mart';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public authService: AuthService)
  {
    iconRegistry.addSvgIcon('lemon', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg'));

  }

}
