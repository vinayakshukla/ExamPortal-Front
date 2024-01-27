import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }
  // login user: set token in localStorage
  public loginUser(token: string){
    localStorage.setItem('token', token);
    return true;
  }
  // isLogin: user is logged in or not
  public isLoggedIn(){
    let tokenStr= localStorage.getItem('token');
    return tokenStr!==undefined && tokenStr!=='' && tokenStr!==null;
  }
  // logOut: remove token from local storage
  public logout(){
    localStorage.removeItem("token");
    return true;
  }
  // get token
  public getToken(): String{
    return localStorage.getItem('token')||'';
     
  }
  // set userDetails in local Storage
  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }
  // getUser from local storage
  public getUser(){
    let userStr= localStorage.getItem("user");
    if(userStr!==null){
      return JSON.parse(userStr);
    } else{
      this.logout();
      return null;
    }
  }

  // get user role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
