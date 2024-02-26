import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn:'root'
})
export class GeneralGuard {
  constructor(private snack: MatSnackBar,private login: LoginService, private router: Router){}
  canActivate(){


    if(this.login.isLoggedIn() && this.login.getUserRole()==='NORMAL'){
      return true;
    }
    this.router.navigate(['login']);
    this.snack.open("Please login as a normal user!!", '', { duration: 3000 });

    return false;
  };
}


export const canActivateGeneral: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(GeneralGuard).canActivate();
};
