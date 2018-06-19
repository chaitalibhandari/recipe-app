import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { LoginComponentComponent } from './login/login-component/login-component.component';
import { OuterNavComponent } from './outer-nav/outer-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

import { UrlService } from './services/url.service';
import { UsersService } from './services/users.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { DashboardMenubarComponent } from './admin/dashboard-menubar/dashboard-menubar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeComponent } from './admin/add-recipe/add-recipe.component';
import { RecipeFormComponent } from './admin/recipe-form/recipe-form.component';
import { RecipeService } from './services/recipe.service';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { ReviewService } from './services/review.service';
import { CommentsComponent } from './comments/comments.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    OuterNavComponent,
    AboutUsComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    SideBarComponent,
    DashboardMenubarComponent,
    RecipeComponent,
    AddRecipeComponent,
    RecipeFormComponent,
    ViewRecipeComponent,
    CommentsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [UrlService,UsersService,RecipeService,ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
