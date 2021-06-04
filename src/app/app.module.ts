import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryModule } from './inventory/inventory.module';
import { ManagerModule } from './manager/manager.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PosModule } from './pos/pos.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ManagerModule,
    InventoryModule,
    PosModule,
    UserModule,
    HttpClientModule,
    ManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
