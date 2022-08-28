import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
