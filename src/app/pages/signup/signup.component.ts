import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  constructor( private userService: UserService, private snack: MatSnackBar){};

  public user={
    username:'',
    password:'',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
    
  }
   formSubmit(){
    console.log(this.user);
    if(this.user.username==='' || this.user.username===null){
      // alert('Username is required');
      this.snack.open("Username is required !!", '',{duration: 2000} );
      return;
    }
    this.userService.addUser(this.user).subscribe((data)=>{
      console.log(data);
      alert('success');
    },(error)=> {
      console.log(error);
      this.snack.open("Something went wrong !!", '',{duration: 2000} );
    })
   }
}
