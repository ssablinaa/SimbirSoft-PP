import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './pages/home/home.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'application';
}
