import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isLoggedIn=false;
  public user:any=null;
  constructor(public  login: LoginService){}
  ngOnInit():void{
    this.isLoggedIn= this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn= this.login.isLoggedIn();
      this.user= this.login.getUser();
    })
  }
  public logout(){
    this.login.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }

}
