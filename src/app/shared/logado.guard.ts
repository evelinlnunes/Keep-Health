import { CanActivateFn } from '@angular/router';

export const LogadoGuard: CanActivateFn = () => {
  const loggedIn = localStorage.getItem('loggedIn') === 'true';
  if (loggedIn) {
    return true;
  } else {
    // Se o usuário não estiver autenticado, redireciona para a página de login
    window.location.href = '/login';
    return false;
  }
};