import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.6) {
      // Puedes navegar, pasamos el guard y vamos donde dice el routing
      return true;
    } else {
      // No puedes navegar y llevamos al usuario a la página principal
      this.router.navigate(['/principal']);
      return false;
    }
  }

}
