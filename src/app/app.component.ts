import { Component } from '@angular/core';
import { MenubarComponent } from './shared/components/menubar/menubar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QuizItEasy.UI';
}
