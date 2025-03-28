import { Routes } from '@angular/router';
import { ProtectedComponent } from './components/protected/protected.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './authentication.guard';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin', // child route path
        component: ProtectedComponent, // child route component that the router renders
        canActivate: [AuthGuard],
      },
    ],
  },
];
