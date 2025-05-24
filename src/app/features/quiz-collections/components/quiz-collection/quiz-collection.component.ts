import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuizCollectionService } from '../../services/quiz-collection.service';
import { PagedResponse } from '../../../../shared/interfaces/paged-response';
import { QuizCollectionItem } from '../../interfaces/quiz-collection-item';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginationModel } from '../../../../shared/models/pagination.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { RouterLink } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
	selector: 'quiz-collection',
	imports: [
		RouterLink,
		CommonModule, 
		ButtonModule, 
		FormsModule, 
		TagModule, 
		InputGroupAddonModule, 
		InputTextModule, 
		ButtonModule, 
		MenuModule,
		CardModule,
		DividerModule,
		PaginatorModule],
	templateUrl: './quiz-collection.component.html',
	styleUrl: './quiz-collection.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class QuizCollectionComponent implements OnInit { 

	paginationModel : PaginationModel = new PaginationModel(6);
	pagedResponse$: Observable<PagedResponse<QuizCollectionItem>> = of();
  	firstCounter: number = 0; 
	
	constructor(private quizCollectionService: QuizCollectionService) { }

	ngOnInit(): void {
		this.pagedResponse$ = this.quizCollectionService.getQuizCollections(
			this.paginationModel.pageNumber, 
			this.paginationModel.pageSize);
	}

	onPageChange(event: any) {
		this.firstCounter = event.first;
		this.paginationModel.pageNumber = event.page + 1;

    	this.pagedResponse$ = this.quizCollectionService.getQuizCollections(
			this.paginationModel.pageNumber, 
			this.paginationModel.pageSize);
  	}
}
