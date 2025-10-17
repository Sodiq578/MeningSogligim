import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <h1>Medical App</h1>
      <a routerLink="/patients" routerLinkActive="active">Patients</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background-color: #2563eb;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navbar h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    .navbar a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    .navbar a:hover,
    .navbar a.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class AppComponent {
  title = 'medical-app';
}