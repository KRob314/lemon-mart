/* import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth' */

import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AngularFireModule } from '@angular/fire'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { AuthService } from './auth/auth.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MaterialModule } from './material.module'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { NgModule } from '@angular/core'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ReactiveFormsModule } from '@angular/forms'
import { SimpleDialogComponent } from './common/simple-dialog.component'
import { authFactory } from './auth/auth.factory'
import { environment } from '../environments/environment';

/* import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component' */
/* import { authFactory } from './auth/auth.factory' */


@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, LoginComponent, NavigationMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    { provide: AuthService, useFactory: authFactory, deps: [AngularFireAuth] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent, MatDialogModule]
})
export class AppModule {}
