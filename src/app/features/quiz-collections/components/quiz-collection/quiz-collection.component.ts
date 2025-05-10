import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuizCollectionService } from '../../services/quiz-collection.service';
import { PagedResponse } from '../../../../shared/interfaces/paged-response';
import { QuizCollectionItem } from '../../interfaces/quiz-collection-item';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginationModel } from '../../../../shared/models/pagination.model';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'quiz-collection',
	imports: [
		CommonModule, 
		ButtonModule, 
		FormsModule, 
		InputGroup, 
		InputGroupAddonModule, 
		InputTextModule, 
		ButtonModule, 
		MenuModule,
		CardModule],
	templateUrl: './quiz-collection.component.html',
	styleUrl: './quiz-collection.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class QuizCollectionComponent implements OnInit { 

	paginationModel : PaginationModel = new PaginationModel();
	pagedResponse$: Observable<PagedResponse<QuizCollectionItem>> = of();;

	constructor(private quizCollectionService: QuizCollectionService) { }

	ngOnInit(): void {
		this.pagedResponse$ = this.quizCollectionService.getQuizCollections(
			this.paginationModel.pageNumber, 
			this.paginationModel.pageSize);
	}

	nextPage() {
		this.paginationModel.pageNumber += 1;
		this.pagedResponse$ = this.quizCollectionService.getQuizCollections(
			this.paginationModel.pageNumber, 
			this.paginationModel.pageSize);
	}
	
	previousPage() {
		this.paginationModel.pageNumber -= 1;
		this.pagedResponse$ = this.quizCollectionService.getQuizCollections(
			this.paginationModel.pageNumber, 
			this.paginationModel.pageSize);
	}

}
