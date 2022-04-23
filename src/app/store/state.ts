import { ActionReducerMap } from '@ngrx/store'
import { AuthEffects } from '../auth/store/auth.effects'
import { authReducer } from '../auth/store/auth.reducers'
import { AuthState } from '../auth/store/auth.state'

export interface AppState {
  auth: AuthState
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer
}

export const effects: any[] = [AuthEffects]
