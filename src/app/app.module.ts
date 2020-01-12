import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './RegisterPage/RegisterFormComponent/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatMenuModule,
  MatCard,
  MatCardModule,
  MatCardTitle,
  MatSlideToggle,
  MatSlideToggleModule,
  MatSpinner,
  MatProgressSpinnerModule} from '@angular/material';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { LoginFormComponent } from './LoginPage/LoginFormComponent/login-form/login-form.component';
import { ProfilePageComponent } from './ProfilePage/profile-page/profile-page.component';
import { ListUsersPageComponent } from './ListUsers/list-users-page/list-users-page.component';
import { UserItemComponent } from './ListUsers/user-item/user-item.component';
import { SingleUserPageComponent } from './SingleUserPage/single-user-page/single-user-page.component';
import { TranslatePipe } from './Translation/translate.pipe'

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    NavBarComponent,
    LoginFormComponent,
    ProfilePageComponent,
    ListUsersPageComponent,
    UserItemComponent,
    SingleUserPageComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**const modules = [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule
]; */
