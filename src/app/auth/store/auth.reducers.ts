import { createReducer, on } from '@ngrx/store'
import { performLogin } from './auth.actions'
import { AuthState } from './auth.state'

const initialState: AuthState = {
  token: 'my_awesome_token'
}

export const authReducer = createReducer(
  initialState,
  on(performLogin, (state) => ({ ...state }))
)
