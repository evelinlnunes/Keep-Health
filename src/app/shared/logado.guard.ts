import { CanActivateFn } from '@angular/router';

export const LogadoGuard: CanActivateFn = () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  if (loggedIn) {
    return true;
  } else {
    window.location.href = '/login';
    return false;
  }
};