import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'submit-talk',
    loadComponent: () =>
      import('./cfp-submission/cfp-submission.component').then(
        (m) => m.CfpSubmissionComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./cfp-dashboard/cfp-dashboard.component').then(
        (m) => m.CfpDashboardComponent
      ),
  },
  {
    path: '',
    redirectTo: 'submit-talk',
    pathMatch: 'full',
  },
];
