import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './authGuard/auth-guard';
import { LoginRegisterComponent } from './login-register/login-register/login-register.component';
import { MainPageComponent } from './main-page-component/main-page/main-page.component';

const routes: Routes = [
   // { path: '', component: LoginComponent },
   // { path: 'signup', component: SignUpComponent },
  // { path: '', component: AppComponent }, 
  { path: "", component: LoginRegisterComponent },
  { path: "main", 
    component: MainPageComponent,
  },
  { path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
