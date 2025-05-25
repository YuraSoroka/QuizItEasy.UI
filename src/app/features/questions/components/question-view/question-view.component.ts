import { ChangeDetectionStrategy, Component, InjectionToken, Injector, OnInit, Type } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { map, Observable, of } from 'rxjs';
import { PagedResponse } from '../../../../shared/interfaces/paged-response';
import { QuestionResponse } from '../../../../shared/interfaces/question-response';
import { CommonModule } from '@angular/common';
import { PaginationModel } from '../../../../shared/models/pagination.model';
import { ActivatedRoute } from '@angular/router';
import { MultiSelectQuestionComponent } from '../multi-select-question/multi-select-question.component';
import { QUESTION_DATA } from '../../../../shared/utility/tokens/data.token';
import { SingleSelectQuestionComponent } from '../single-select-question/single-select-question.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { QuestionData } from '../../../../shared/models/question-data.model';

@Component({
	selector: 'question-view',
	imports: [
		CommonModule,
		ButtonModule,
		StyleClassModule
	],
	templateUrl: './question-view.component.html',
	styleUrl: './question-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionViewComponent implements OnInit {

	collectionId: string;
	dynamicInjector!: Injector;
	paginationModel: PaginationModel = new PaginationModel(1);
	pagedResponse$: Observable<PagedResponse<QuestionResponse>> = of();

	componentMap: Record<string, Type<any>> = {
		SingleSelectQuestion: SingleSelectQuestionComponent,
		MultiSelectQuestion: MultiSelectQuestionComponent
	};

	constructor(
		private questionService: QuestionsService,
		private route: ActivatedRoute,
		private injector: Injector) { 
			this.collectionId = this.route.snapshot.paramMap.get('collectionId')!;
		}

	ngOnInit(): void {
		this.pagedResponse$ = this.loadQuestion();
	}

	isJson(str: string): boolean {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			return false;
		}
	}

	
	fetchNextQuestion() {
		this.paginationModel.pageNumber++;
		this.pagedResponse$ = this.loadQuestion();
	}

	fetchPreviousQuestion() {
		this.paginationModel.pageNumber--;
		this.pagedResponse$ = this.loadQuestion();
	}

	private loadQuestion(): Observable<PagedResponse<QuestionResponse>>{
		return this.questionService.getQuizCollections(this.collectionId, this.paginationModel.pageNumber)
			.pipe(
				map(response => {
					this.dynamicInjector = Injector.create({
						providers: [{ 
							provide: QUESTION_DATA, 
							useValue: new QuestionData(this.paginationModel.pageNumber, response.items[0].questionJson)
						}],
						parent: this.injector
					});
					return response;
				}));
	}
}