import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './RegisterPage/RegisterFormComponent/register-form/register-form.component';
import { LoginFormComponent } from './LoginPage/LoginFormComponent/login-form/login-form.component';
import { ProfilePageComponent } from './ProfilePage/profile-page/profile-page.component';
import { ListUsersPageComponent } from './ListUsers/list-users-page/list-users-page.component';
import { SingleUserPageComponent } from './SingleUserPage/single-user-page/single-user-page.component';


const routes: Routes = [{path: 'register', component: RegisterFormComponent},
{path: 'login', component: LoginFormComponent},
{path: 'logout', component: RegisterFormComponent},
{path: 'listusers', component: ListUsersPageComponent},
{path: 'profile', component: ProfilePageComponent},
{path: ':id', component: SingleUserPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
