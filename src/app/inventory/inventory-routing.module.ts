import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryComponent } from './inventory.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {path: '', redirectTo: '/inventory/home', pathMatch: 'full'},
      {path: 'home', component: InventoryHomeComponent, canActivate: [AuthGuard]},
      {path: 'stock-entry', component: StockEntryComponent, canActivate: [AuthGuard]},
      {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
      {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
