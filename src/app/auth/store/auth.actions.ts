import { createAction, props } from '@ngrx/store'
import { ILoginRequestData, ILoginResponseData } from 'src/app/models/auth'

export const performLogin = createAction(
  '[AUTH] Perform Login request to api',
  props<ILoginRequestData>()
)

export const login = createAction('[AUTH] Login', props<ILoginResponseData>())

export const authError = createAction('[AUTH] Authentication error', props<{ error: string }>())
