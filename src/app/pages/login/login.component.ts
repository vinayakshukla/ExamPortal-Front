import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginData = {
    username: '',
    password: ''
  };

  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { };
  ngOnInit(): void {

  }
  public formSubmit() {
    console.log("form");
    if (this.loginData.username === null || this.loginData.username.trim() === '') {
      // nobody like pop up so we are using the snak bar
      // Swal.fire( 'Error', 'Please fill all the mandatory fields', 'error');
      this.snack.open("Username cannot be empty!!", '', { duration: 3000 });
      return;
    }
    if (this.loginData.password === null || this.loginData.password.trim() === '') {
      this.snack.open("Password cannot be empty!!", '', { duration: 3000 });
      return;
    }

    // request to server to generate token
    this.login.generateToken(this.loginData).subscribe({
      next: (data: any) => {
        console.log("log-in success");
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);

          // pending redirect .. admin-db or normal db
          if(this.login.getUserRole()==='ADMIN'){
            this.router.navigate(['admin-dashboard']);
            this.login.loginStatusSubject.next(true);
          }else if(this.login.getUserRole()==='NORMAL'){
           this.router.navigate(['user-dashboard']);
           this.login.loginStatusSubject.next(true);
          }
          else{
            this.login.logout();
          }
        });

      }
      ,
      error: (error) => {

        console.log('Error !');
        console.log(error);
        this.snack.open("Invalid Details !! Try again ", " ", {duration:3000});
      }
    });
  }



}
