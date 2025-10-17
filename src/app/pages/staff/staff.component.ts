import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule], // *ngFor uchun zarur
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  staffMembers = [
    { name: 'Dr. Emily Carter', role: 'Physician' },
    { name: 'Nurse Mike Lee', role: 'Nurse' },
    { name: 'Admin Sarah Brown', role: 'Administrator' }
  ];
}
