import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { canActivateTeam } from './services/admin.guard';
import { canActivateGeneral } from './services/general.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';

const routes : Routes= [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },

   {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full',

   },
   {path: 'login',
   component: LoginComponent,
   pathMatch:'full'
  },{
    path:'admin-dashboard',
    component: AdminDashboardComponent,
  
    children:[
      
    {  path:'',
      component: WelcomeComponent,
    },
    {  path:'profile',
    component: ProfileComponent,
  },
  {  path:'categories',
    component: ViewCategoriesComponent,
  },
  {
    path:'add-categories',
    component: AddCategoryComponent,
  },
    ],
    canActivate: [canActivateTeam],
  },
  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    pathMatch:'full',
    canActivate: [canActivateGeneral],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
