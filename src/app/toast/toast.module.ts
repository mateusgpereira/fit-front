import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ToastComponent } from './toast.component'

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ToastComponent]
})
export class ToastModule {}
