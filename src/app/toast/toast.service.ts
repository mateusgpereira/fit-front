import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ToastModel, ToastType } from './types'

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast: Subject<ToastModel> = new Subject()

  showToast(message: string, type: ToastType): void {
    this.toast.next({
      message,
      type,
      show: true
    })
  }

  showToastWithTimeout(message: string, type: ToastType, timeoutMs: number): void {
    this.showToast(message, type)
    setTimeout(() => {
      this.hide()
    }, timeoutMs)
  }

  hide(): void {
    this.toast.next({
      message: '',
      type: '' as any,
      show: false
    })
  }
}
