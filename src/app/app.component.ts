import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar color="primary">
    <a mat-button routerLink="/home"><h1>LemonMart</h1></a>
  </mat-toolbar>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'lemon-mart';
}
