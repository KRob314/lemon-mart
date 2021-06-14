import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatCardHeader, MatCardModule } from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgModule } from '@angular/core';

const modules = [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatCardModule, MatInputModule, MatSidenavModule, MatSnackBarModule,
MatDialogModule, MatSelectModule, ReactiveFormsModule, FormsModule]

@NgModule({
  declarations: [],
  imports:  modules,
  exports: modules
})
export class MaterialModule { }
