import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class SettingsComponent {
  settings = [
    { name: 'Profile Settings', description: 'Update your personal information' },
    { name: 'Security', description: 'Change password and security settings' }
  ];
}