import { AuthService } from '../services/auth.service';
import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

export const authFnGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.getToken()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
