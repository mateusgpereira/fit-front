import { createReducer, on } from '@ngrx/store'
import { authError, login } from './auth.actions'
import { AuthState } from './auth.state'

const initialState: AuthState = {
  token: '',
  error: ''
}

export const authReducer = createReducer(
  initialState,
  on(login, (state, { token }) => {
    return {
      ...state,
      token
    }
  }),
  on(authError, (state, payload) => {
    return {
      ...state,
      error: payload.error
    }
  })
)
