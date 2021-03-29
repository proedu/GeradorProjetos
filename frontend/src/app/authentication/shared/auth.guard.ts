import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
	state: RouterStateSnapshot): boolean {
		let token = window.localStorage.getItem('token');

		if (token) { 
			token = JSON.parse(token)
			
			if (token['expire'] > Date.now()) {
				return true;
			}
			else {
				localStorage.removeItem('token');
			}
		} 
		else{
			this.router.navigate(['/login']);
			return false;
		}

  	}
  
}
