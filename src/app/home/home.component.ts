import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  styles: [`
    div[fxLayout] {margin-top: 32px;}
  `],
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <div class="mat-display-2">Hello, Limoncu!</div>
      <button mat-raised-button color="primary" >Login</button>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
