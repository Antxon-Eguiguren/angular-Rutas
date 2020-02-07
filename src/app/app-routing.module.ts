import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: MainComponent },
  { path: 'info', component: InfoComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'usuario/:usuarioId', component: UsuarioComponent },
  { path: '**', redirectTo: 'principal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
