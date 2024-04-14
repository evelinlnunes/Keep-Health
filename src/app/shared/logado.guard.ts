import { CanActivateFn } from '@angular/router';

export const LogadoGuard: CanActivateFn = () => {
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  if (loggedIn) {
    return true;
  } else {
    window.location.href = '/login';
    return false;
  }
  
}
return false;}