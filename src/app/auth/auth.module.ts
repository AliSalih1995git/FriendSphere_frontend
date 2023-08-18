import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ResetComponent } from './components/reset/reset.component';
import { SearchAccountComponent } from './components/search-account/search-account.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { CodeVerificationComponent } from './components/code-verification/code-verification.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    SearchAccountComponent,
    SendEmailComponent,
    CodeVerificationComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
})
export class AuthModule {}
