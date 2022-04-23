import { Component } from '@angular/core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { ILoginRequestData } from '../models/auth'
import { User } from '../models/user'
import { AppState } from '../store/state'
import { performLogin } from './store/auth.actions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  mailIcon = faEnvelope

  passwordIcon = faLock

  user: ILoginRequestData = new User('', '')

  constructor(private store: Store<AppState>) {}

  onLoginSubmit(): void {
    this.store.dispatch(performLogin(this.user))
  }
}
