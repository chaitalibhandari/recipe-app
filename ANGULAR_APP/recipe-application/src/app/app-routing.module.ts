import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { LoginComponentComponent } from './login/login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddRecipeComponent } from './admin/add-recipe/add-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes:Routes=[
  { path:'',component:HomeComponent },
  { path:'login',component:LoginComponent},
  { path:'register',component:RegistrationComponent},
  { path:'admin',component:AdminComponent},
  { path:'admin/dashboard',component:DashboardComponent},
  { path:'admin/add-recipe',component:AddRecipeComponent},
  { path:'view/:id',component:ViewRecipeComponent},
  { path:'logout',component:LogoutComponent}
  



 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
