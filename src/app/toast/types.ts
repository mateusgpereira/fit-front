import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export type ToastIcons = {
  [key in ToastType]: IconDefinition
}

export interface ToastModel {
  message: string
  type: ToastType
  show: boolean
}
