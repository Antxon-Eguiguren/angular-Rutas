import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  manejarClick(pRuta) {
    // Hacer más acciones (gestionar formulario, lanzar petición al servidor,...) y cuando termine con las acciones, puedo navegar. Con el router link, solo puedo navegar
    this.router.navigate([pRuta]);
  }
}
