import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';  
import Swal from 'sweetalert2'

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
      // pending add some more validations
      
      Swal.fire( 'Error', 'Username required', 'error');
      
      return;
    }
    this.userService.addUser(this.user).subscribe((data)=>{
      console.log(data);
      Swal.fire( 'Success', 'User with the username: '+this.user.username+' is registered', 'success');
    },(error)=> {
      console.log(error);
      Swal.fire( 'Error', 'Something went wrong !!', 'error');
      
    })
   }
}
