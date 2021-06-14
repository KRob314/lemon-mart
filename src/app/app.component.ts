import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MediaObserver } from '@angular/flex-layout';
import { SubSink } from 'subsink';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="app-container">
  <mat-toolbar color="primary" fxLayoutGap="8px"
    class="app-toolbar"
    [class.app-is-mobile]="media.isActive('xs')"
    *ngIf="{
      status: authService.authStatus$ | async,
      user: authService.currentUser$ | async
    } as auth;"
  >
    <button *ngIf="auth?.status?.isAuthenticated"
      mat-icon-button (click)="sidenav.toggle()"
    >
      <mat-icon>menu</mat-icon>
    </button>
    ...
  </mat-toolbar>
  <mat-sidenav-container class="app-sidenav-container">
    <mat-sidenav #sidenav
      [mode]="media.isActive('xs') ? 'over' : 'side'"
      [fixedInViewport]="media.isActive('xs')"
      fixedTopGap="56" [(opened)]="opened"
    >
      <app-navigation-menu></app-navigation-menu>
    </mat-sidenav>
    <mat-sidenav-content>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  </mat-sidenav-container>
  </div>
`
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lemon-mart';
  private subs = new SubSink();
  opened: boolean;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public authService: AuthService, public media: MediaObserver)
  {
    iconRegistry.addSvgIcon('lemon', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg'));
    this.opened = false;
  }

  ngOnDestroy()
  {
    this.subs.unsubscribe();
  }

  ngOnInit() {
    this.subs.sink = combineLatest([
      this.media.asObservable(),
      this.authService.authStatus$,
    ])
      .pipe(
        tap(([mediaValue, authStatus]) => {
          if (!authStatus?.isAuthenticated) {
            this.opened = false
          } else {
            if (mediaValue[0].mqAlias === 'xs') {
              this.opened = false
            } else {
              this.opened = true
            }
          }
        })
      )
      .subscribe()
  }


}
