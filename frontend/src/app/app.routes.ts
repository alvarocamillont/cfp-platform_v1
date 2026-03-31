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
    path: '',
    redirectTo: 'submit-talk',
    pathMatch: 'full',
  },
];
