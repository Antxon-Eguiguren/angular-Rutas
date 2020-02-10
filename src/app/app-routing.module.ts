import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductComponent } from './product/product.component';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: MainComponent },
  { path: 'info', component: InfoComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'usuario/:usuarioId', component: UsuarioComponent, canActivate: [LoginGuard] },
  {
    path: 'producto/:productoId', component: ProductComponent,
    children: [
      { path: 'related', component: RelatedComponent },
      { path: 'reviews', component: ReviewsComponent },
    ]
  },
  { path: '**', redirectTo: 'principal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
