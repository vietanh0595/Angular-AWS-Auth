import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService, User } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-AWS-Auth';
  user: User | null = null;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    console.log('this.user', this.user);
  }

  logout() {
    this.authService.logout();
  }
}
