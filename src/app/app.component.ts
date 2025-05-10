import { Component } from '@angular/core';
import { QuizCollectionComponent } from "./features/quiz-collections/components/quiz-collection/quiz-collection.component";
import { MenubarComponent } from './shared/components/menubar/menubar.component';

@Component({
  selector: 'app-root',
  imports: [
    MenubarComponent,
    QuizCollectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QuizItEasy.UI';
}
