import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  public category={
    title:"",
    description:""
  }
  constructor(private _category: CategoryService, private _snack:MatSnackBar){}

  submitForm(){
    if(this.category.title.trim()==''|| this.category.title==null){
      this._snack.open("Title Required !!", "" , {duration:3000});
      return;
    }
    this._category.addCategory(this.category).subscribe({
      next:(data:any)=>{
        this.category.title="";
        this.category.description=""; 
       Swal.fire("Success !!", "Category is added successfully", 'success');
      },
      error:(data:any)=>{
        Swal.fire("Error !!", "Server error", 'error');
       }
    })
  }

}
