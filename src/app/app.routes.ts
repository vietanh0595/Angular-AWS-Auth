import { Routes } from '@angular/router';
import { ProtectedComponent } from './components/protected/protected.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './authentication.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children: [
      {
        path: 'admin', // child route path
        component: ProtectedComponent, // child route component that the router renders
      },
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
    ],
    canActivate: [AuthGuard],
  },
];
