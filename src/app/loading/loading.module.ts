import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxLoadingModule } from 'ngx-loading'
import { LoadingComponent } from './loading.component'

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true
    })
  ],
  exports: [LoadingComponent]
})
export class LoadingModule {}
