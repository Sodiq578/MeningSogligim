import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatItem {
  title: string;
  value: number | string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // kerak bo‘lsa *ngFor, *ngIf uchun
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // === Statistik ma’lumotlar ===
  stats: StatItem[] = [
    { title: 'Patients', value: 150, description: 'Active registered patients', icon: '🧑‍⚕️' },
    { title: 'Staff', value: 20, description: 'Doctors and medical staff', icon: '👩‍🔬' },
    { title: 'Appointments', value: 45, description: 'Upcoming appointments', icon: '📅' },
    { title: 'Departments', value: 8, description: 'Active medical departments', icon: '🏥' },
    { title: 'Reports', value: 120, description: 'Recent health reports', icon: '📊' },
    { title: 'Feedback', value: 32, description: 'Positive patient feedback', icon: '💬' },
  ];

  // === Bugungi kunning qisqacha ko‘rinishi ===
  todayOverview = [
    '✔️ 12 new patients registered',
    '🩺 8 consultations completed',
    '💊 5 prescriptions issued',
    '📋 3 new appointments scheduled',
  ];

  // === Ma’lumotni yangilash yoki API orqali olish uchun misol funksiya ===
  refreshData() {
    console.log('Refreshing data...');
    // Bu joyda siz API dan yangi ma’lumotlarni olishni amalga oshirasiz.
  }
}
