import { Routes } from '@angular/router';
import { QuizCollectionComponent } from './features/quiz-collections/components/quiz-collection/quiz-collection.component';
import { QuestionViewComponent } from './features/questions/components/question-view/question-view.component';

export const routes: Routes = [
    {path: "quiz-collections", component: QuizCollectionComponent},
    {path: "quiz-collections/:collectionId/questions", component: QuestionViewComponent}
];
