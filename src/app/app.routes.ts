// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'staff',
    loadComponent: () =>
      import('./pages/staff/staff.component').then((m) => m.StaffComponent),
  },
 
  // {
  //   path: 'appointments',
  //   loadComponent: () =>
  //     import('./pages/appointments/appointments').then((m) => m.AppointmentsComponent),
  // },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports').then((m) => m.ReportsComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings').then((m) => m.SettingsComponent),
  },
  { path: '**', redirectTo: 'home' }
];








