import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { ILoginResponseData } from 'src/app/models/auth'
import { AuthService } from '../auth.service'
import { performLogin, login as loginAction, authError, login } from './auth.actions'

@Injectable()
export class AuthEffects {
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

  constructor(private action$: Actions, private authService: AuthService, private router: Router) {}

  private authSuccess(resData: ILoginResponseData, redirectTo: string = '/') {
    const { token } = resData
    localStorage.setItem('token', token)
    this.router.navigate([redirectTo])
  }
}
