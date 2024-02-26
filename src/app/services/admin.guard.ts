import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn:'root'
})
export class AdminGuard {
  constructor(private snack: MatSnackBar,private login: LoginService, private router: Router){}
  canActivate(){


    if(this.login.isLoggedIn() && this.login.getUserRole()==='ADMIN'){
      return true;
    }
    this.router.navigate(['login']);
    this.snack.open("Please login as a admin!!", '', { duration: 3000 });

    return false;
  };
}


export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AdminGuard).canActivate();
};
