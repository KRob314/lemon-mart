import { CommonModule } from '@angular/common';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'

export const managerModuleRoutes: Routes = [
  {path: '', component: ManagerHomeComponent}
]
@NgModule({
  declarations: [
    ManagerHomeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ManagerModule { }
