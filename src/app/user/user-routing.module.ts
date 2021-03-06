import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canLoad: [AuthGuard]},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
