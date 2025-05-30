import { Routes } from '@angular/router';
import { QuizCollectionComponent } from './features/quiz-collections/components/quiz-collection/quiz-collection.component';
import { QuestionViewComponent } from './features/questions/components/question-view/question-view.component';
import { questionViewResolver } from './features/questions/resolvers/question-view.resolver';

export const routes: Routes = [
    { path: "quiz-collections", component: QuizCollectionComponent },
    { 
        path: "quiz-collections/:collectionId/questions", 
        component: QuestionViewComponent, 
        resolve: { questionResponse: questionViewResolver },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    }
];
