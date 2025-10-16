import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], // Add CommonModule if using *ngFor, *ngIf, etc.
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}