import { Component, OnDestroy, OnInit } from '@angular/core'
import {
  faCircleCheck,
  faClose,
  faExclamationTriangle,
  faExclamationCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs'
import { flyInOutLeft } from '../shared/animations'
import { ToastService } from './toast.service'
import { ToastIcons, ToastType } from './types'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [flyInOutLeft]
})
export class ToastComponent implements OnInit, OnDestroy {
  closeIcon = faClose

  show = false

  message = ''

  type: ToastType = 'info'

  icons: ToastIcons = {
    success: faCircleCheck,
    error: faExclamationCircle,
    warning: faExclamationTriangle,
    info: faInfoCircle
  }

  sub: Subscription | undefined

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.sub = this.toastService.toast.subscribe(({ message, type, show }) => {
      this.message = message
      this.type = type
      this.show = show
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  onCloseClick(): void {
    this.toastService.hide()
  }
}
