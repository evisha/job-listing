import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

/**
 * AuthGuard will watch firstly on redux userinfo, and if not localstorage token.
 */
@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('accessToken') && !localStorage.getItem('refreshToken')) {
      return this.router.navigateByUrl('/login');
    } else {
      return !!localStorage.getItem('accessToken') && !!localStorage.getItem('refreshToken');
    }
  }
}

/**
 * Roles Guard will watch directly on redux userinfo for existing user and if exist will watch for
 * ROLES
 */
@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /**
     * Check for existing localStorage,
     * Make call to get USER INFO DATA
     * If userinfo role is same as 'ADMIN' => return true, else false
     */
    return true;
  }

}

