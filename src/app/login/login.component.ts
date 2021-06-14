import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { EmailValidation, PasswordValidation } from '../common/validations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { catchError, filter, tap } from 'rxjs/operators'

import { AuthService } from '../auth/auth.service'
import { Role } from '../auth/auth.enum'
import { SubSink } from 'subsink'
import { UiService } from '../common/ui.service';
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
    private route: ActivatedRoute,
    private uiService: UiService
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
      email: ['', EmailValidation],
      password: ['', PasswordValidation],
    })
  }

  async login(submittedForm: FormGroup) {
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
          this.uiService.showToast(`welcome ${user.fullName}! Role: ${user.role}`);
          //this.uiService.showDialog(`Welcome ${user.fullName}!`, `Role: ${user.role}`);
          this.router.navigate([this.redirectUrl || '/manager'])
        })
      )
      .subscribe()
  }
}
