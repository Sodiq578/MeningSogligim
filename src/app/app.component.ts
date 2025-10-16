import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // router-outlet uchun
import { SidebarComponent } from './components/sidebar/sidebar.component'; // <app-sidebar> uchun

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent], // MUHIM QATOR!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic-app';
}
