import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent {
  public categories =[{
    cid:1,
    title: "Programming",
    description: "this is testing"
  }];
 constructor(private _category: CategoryService){}
//  ngOnInit():void{
//      this._category.categories().subscribe({next:(data:any)=>{
//       this.categories=data;
//       console.log(this.categories);
//      },
//      error:(error)=>{
//       Swal.fire('Error !!', 'Error in loading data', 'error');
//      }}
//      );
//  }
}
