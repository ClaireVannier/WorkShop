import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StudentDetailComponent } from './student-details/student-details.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'wcs/:name', component: StudentDetailComponent },
  { path: 'drivenform', component: LoginformComponent}
];
