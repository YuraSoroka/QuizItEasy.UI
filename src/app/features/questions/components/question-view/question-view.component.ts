import { ChangeDetectionStrategy, Component, Injector, OnInit, Type } from '@angular/core';
import { filter, map, merge, Observable, of } from 'rxjs';
import { PagedResponse } from '../../../../shared/interfaces/paged-response';
import { QuestionResponse } from '../../../../shared/interfaces/question-response';
import { CommonModule } from '@angular/common';
import { PaginationModel } from '../../../../shared/models/pagination.model';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { MultiSelectQuestionComponent } from '../multi-select-question/multi-select-question.component';
import { QUESTION_DATA } from '../../../../shared/utility/tokens/data.token';
import { SingleSelectQuestionComponent } from '../single-select-question/single-select-question.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { QuestionData } from '../../../../shared/models/question-data.model';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
	selector: 'question-view',
	imports: [
		CommonModule,
		ButtonModule,
		StyleClassModule,
		ProgressSpinnerModule
	],
	templateUrl: './question-view.component.html',
	styleUrl: './question-view.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionViewComponent implements OnInit {
	private _showLoaderEvents$!: Observable<boolean>;
	private _hideLoaderEvents$!: Observable<boolean>;

	isLoading: boolean = true;
	isLoading$: Observable<boolean> = of(true);
	collectionId!: string;
	dynamicInjector!: Injector;
	paginationModel!: PaginationModel;
	pagedResponse!: PagedResponse<QuestionResponse>;

	componentMap: Record<string, Type<any>> = {
		SingleSelectQuestion: SingleSelectQuestionComponent,
		MultiSelectQuestion: MultiSelectQuestionComponent
	};

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private injector: Injector) {
	}

	ngOnInit(): void {
		const pageNumber = +this.route.snapshot.queryParamMap.get('pageNumber')! || 1;
		this.paginationModel = new PaginationModel(pageNumber, null);
		
		this.route.data.subscribe(data => {
			this.collectionId = data['collectionId'];
			this.pagedResponse = data['questionResponse']; 
			this.dynamicInjector = this.resolveInjector();
		});

		this._showLoaderEvents$ = this.router.events.pipe(
			filter((e) => e instanceof ResolveStart), map(_ => true)
		);
		this._hideLoaderEvents$ = this.router.events.pipe(
			filter((e) => e instanceof ResolveEnd), map(_ => false)
		);
		this.isLoading$ = merge(this._hideLoaderEvents$, this._showLoaderEvents$);
	}

	isJson(str: string): boolean {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			return false;
		}
	}

	moveToQuestion(pageNumber: number) {
		this.paginationModel.pageNumber = pageNumber;

		this.router.navigate([], {
			relativeTo: this.route,
			queryParams: { pageNumber: this.paginationModel.pageNumber },
			queryParamsHandling: 'merge',
		});
	}


	private resolveInjector(): Injector {
		return Injector.create({
			providers: [{
				provide: QUESTION_DATA,
				useValue: new QuestionData(this.paginationModel.pageNumber, this.pagedResponse.items[0].questionJson)
			}],
			parent: this.injector
		});
	}
}