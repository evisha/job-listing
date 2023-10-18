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
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    // 1 -> JOB POSTER / ADMIN
    // 2 -> JOB SEEKER
    const requiredRole = "1"; // Role required for the route is ADMIN/Job Poster CODE 1
    // return true User has the required role
    // return false User doesn't have the required role
    const userRole = localStorage.getItem('roleID');
    return userRole === requiredRole
  }
}

