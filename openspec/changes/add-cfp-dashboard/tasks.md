## 1. Backend Implementation (NestJS)

- [ ] 1.1 Verify/Implement `GET /speakers` endpoint in `SpeakerController` returning `SpeakerDTO[]`.
- [ ] 1.2 Ensure `SpeakerService.findAll()` correctly retrieves the in-memory speakers list.

## 2. Frontend Dashboard Component (Angular 21)

- [ ] 2.1 Generate `CfpDashboardComponent` as a standalone component.
- [ ] 2.2 Inject `HttpClient` and implement `fetchSpeakers()` method.
- [ ] 2.3 Setup `submissions = signal<SpeakerDTO[]>([])` for state management.
- [ ] 2.4 Implement the dashboard template using semantic HTML and glassmorphism CSS (reusing tokens).
- [ ] 2.5 Handle loading and error states using signals and ARIA-compliant elements.

## 3. Routing and Navigation

- [ ] 3.1 Register the `/dashboard` route in `app.routes.ts` pointing to `CfpDashboardComponent`.
- [ ] 3.2 Add a "View Dashboard" button to `CfpSubmissionComponent` template.
- [ ] 3.3 Style the navigation button to match the existing form's action buttons.

## 4. Verification

- [ ] 4.1 Perform a test submission and verify it appearing on the dashboard.

