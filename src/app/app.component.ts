import { Component } from '@angular/core';
import { QuizCollectionComponent } from "./features/quiz-collections/components/quiz-collection/quiz-collection.component";

@Component({
  selector: 'app-root',
  imports: [
    QuizCollectionComponent, 
    QuizCollectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QuizItEasy.UI';
}
