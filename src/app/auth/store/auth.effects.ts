import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { AuthService } from '../auth.service'
import { performLogin, login as loginAction, authError } from './auth.actions'

@Injectable()
export class AuthEffects {
  login = createEffect(() =>
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

  constructor(private action$: Actions, private authService: AuthService) {}
}
