import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css'],
  providers: [DatePipe]
})
export class ReportsComponent {
  reports = [
    { title: 'Monthly Patient Report', date: new Date('2024-01-15'), type: 'PDF' },
    { title: 'Financial Summary', date: new Date('2024-01-10'), type: 'Excel' },
    { title: 'Annual Health Statistics', date: new Date('2024-02-01'), type: 'PDF' }
  ];

  filteredReports = [...this.reports];
  searchQuery: string = '';
  filterType: string = '';

  constructor(private datePipe: DatePipe) {}

  // Hisobotlarni filtr qilish
  filterReports() {
    this.filteredReports = this.reports.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesType = this.filterType ? report.type === this.filterType : true;
      return matchesSearch && matchesType;
    });
  }

  // Hisobotni o'chirish
  deleteReport(index: number) {
    if (confirm('Are you sure you want to delete this report?')) {
      this.reports.splice(index, 1);
      this.filterReports();
    }
  }

  // Hisobotni ko'rish
  viewReport(index: number) {
    alert(`Viewing report: ${this.reports[index].title}`);
    // Hisobotni ko'rish logikasi bu yerda qo'shiladi
  }

  // Yangi hisobot qo'shish
  openAddReportModal() {
    alert('Open modal to add new report');
    // Modal oynada forma ochish logikasi qo'shiladi
  }

  // Hisobot turi bo'yicha CSS klassi
  getTypeClass(type: string): string {
    switch (type) {
      case 'PDF': return 'badge-pdf';
      case 'Excel': return 'badge-excel';
      default: return '';
    }
  }
}