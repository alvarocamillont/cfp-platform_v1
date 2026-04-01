import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EventDTO } from '@cfp-platform/shared-types';

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './event-registration.component.html',
  styleUrl: './event-registration.component.css',
})
export class EventRegistrationComponent {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  submissionStatus = signal<SubmissionStatus>('idle');
  errorMessage = signal<string | null>(null);

  eventForm = this.fb.group({
    nome: ['', [Validators.required]],
    endereço: ['', [Validators.required]],
    capacidade: [null as number | null, [Validators.required, Validators.min(1)]],
    data: ['', [Validators.required]],
  });

  async submit() {
    if (this.eventForm.invalid || this.submissionStatus() === 'loading') {
      return;
    }

    this.submissionStatus.set('loading');
    this.errorMessage.set(null);

    const payload: Partial<EventDTO> = {
      nome: this.eventForm.value.nome!,
      endereço: this.eventForm.value.endereço!,
      capacidade: this.eventForm.value.capacidade!,
      data: this.eventForm.value.data!,
    };

    this.http.post<EventDTO>('/api/events', payload).subscribe({
      next: () => {
        this.submissionStatus.set('success');
        this.eventForm.reset();
      },
      error: (err) => {
        this.submissionStatus.set('error');
        this.errorMessage.set(err.error?.message || 'Erro inesperado ao cadastrar o evento.');
      }
    });
  }
}
