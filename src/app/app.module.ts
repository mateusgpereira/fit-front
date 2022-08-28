import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoadingModule } from './loading/loading.module'
import { appReducer, effects } from './store/state'
import { ToastModule } from './toast/toast.module'
import { HomeComponent } from './home/home.component'
import { httpInterceptorsProviders } from './http-interceptors'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    LoadingModule,
    ToastModule
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
