import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { ILoginResponseData } from 'src/app/models/auth'
import { ToastService } from 'src/app/toast/toast.service'
import { AuthService } from '../auth.service'
import { performLogin, login as loginAction, authError, login } from './auth.actions'

@Injectable()
export class AuthEffects {
  private readonly DEFAULT_TIMEOUT_MS = 3000

  loginInit = createEffect(() =>
    this.action$.pipe(
      ofType(performLogin),
      switchMap((payload) =>
        this.authService.performLogin(payload).pipe(
          map((resData) => loginAction(resData)),
          catchError((error) => of(authError(error)))
        )
      )
    )
  )

  loginSuccessRedirect = createEffect(
    () =>
      this.action$.pipe(
        ofType(login),
        tap((resData) => {
          if (resData.token) {
            this.authSuccess(resData)
          }
        })
      ),
    { dispatch: false }
  )

  authError = createEffect(
    () =>
      this.action$.pipe(
        ofType(authError),
        tap(() => {
          this.toastService.showToastWithTimeout(
            'Credenciais Inválidas',
            'error',
            this.DEFAULT_TIMEOUT_MS
          )
        })
      ),
    { dispatch: false }
  )

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  private authSuccess(resData: ILoginResponseData, redirectTo: string = '/') {
    const { token } = resData
    localStorage.setItem('token', token)
    this.toastService.showToastWithTimeout(
      'Login realizado com sucesso',
      'success',
      this.DEFAULT_TIMEOUT_MS
    )
    this.router.navigate([redirectTo])
  }
}
