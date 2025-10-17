import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('sidebar-open');
      document.addEventListener('keydown', this.handleEscapeKey);
    } else {
      document.body.classList.remove('sidebar-open');
      document.removeEventListener('keydown', this.handleEscapeKey);
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('sidebar-open');
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  private handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowEvent = event as unknown as { target: { innerWidth: number } };
    if (windowEvent.target.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
