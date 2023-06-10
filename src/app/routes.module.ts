import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


export const AUTHENTICATION_ROUTES: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Login' } },
];
