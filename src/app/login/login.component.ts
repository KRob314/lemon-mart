import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { catchError, filter, tap } from 'rxjs/operators'

import { AuthService } from '../auth/auth.service'
import { MaterialModule } from '../material.module';
import { Role } from '../auth/auth.enum'
import { SubSink } from 'subsink'
import { combineLatest } from 'rxjs'

/* import { UiService } from '../common/ui.service'
import { EmailValidation, PasswordValidation } from '../common/validations' */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [    `
      .error {
        color: red
      }
    `,
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  private subs = new SubSink()
  loginForm: FormGroup
  loginError = ''
  redirectUrl: string | undefined

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({email: new FormControl(''), password: new FormControl('')})
    this.subs.sink = route.paramMap.subscribe(
      params => (this.redirectUrl =
        params.get('redirectUrl') ?? ''
      )
    )
  }
  ngOnInit() {
    this.authService.logout()
    this.buildLoginForm()
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]],
    })
  }

  async login(submittedForm: FormGroup) {
    console.log('login');
    console.log(submittedForm);
    console.log(    this.authService
      .login(
        submittedForm.value.email,
        submittedForm.value.password
      ));

    this.authService
      .login(
        submittedForm.value.email,
        submittedForm.value.password
      )
      .pipe(catchError(err => (this.loginError = err)))
    this.subs.sink = combineLatest([
      this.authService.authStatus$,
      this.authService.currentUser$,
    ])
      .pipe(
        filter(
          ([authStatus, user]) =>
            authStatus.isAuthenticated && user?._id !== ''
        ),
        tap(([authStatus, user]) => {
          this.router.navigate([this.redirectUrl || '/manager'])
        })
      )
      .subscribe()
  }
}
