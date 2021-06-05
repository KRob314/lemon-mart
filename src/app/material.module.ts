import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgModule } from '@angular/core';

const modules = [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule]

@NgModule({
  declarations: [],
  imports:  modules,
  exports: modules
})
export class MaterialModule { }
