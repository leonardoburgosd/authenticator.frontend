import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PermisosComponent } from './permisos/permisos.component';

const routes: Routes = [
  { path: 'login', component: AppComponent },
  { path: 'permisos', component: PermisosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
