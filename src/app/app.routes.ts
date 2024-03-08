import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentDetailComponent } from './student-details/student-details.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ButtonComponent } from './button/button.component';

export const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'wcs/:name', component: StudentDetailComponent },
  { path: 'drivenform', component: LoginformComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'button', component: ButtonComponent },
];
