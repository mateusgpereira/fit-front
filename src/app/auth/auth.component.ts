import { Component, OnInit } from '@angular/core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  mailIcon = faEnvelope

  passwordIcon = faLock

  constructor() {}

  ngOnInit(): void {}
}
