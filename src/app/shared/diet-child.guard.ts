import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietChildGuard implements CanActivateChild {

  constructor(private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
    const id = route.url[1] ? route.url[1].path : null;

    
    const idIsNumber = !isNaN(Number(id));

    
    if (!idIsNumber) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}