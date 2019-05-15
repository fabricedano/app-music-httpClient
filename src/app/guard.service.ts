import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private authS: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | boolean{
    
    if(this.authS.authState === true) return true

    this.router.navigate(
      ['/login'],
      {queryParams: {messageError: 'Error login'}}
    )
  }
}
