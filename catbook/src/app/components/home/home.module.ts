import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../template/message/message.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MessageModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
