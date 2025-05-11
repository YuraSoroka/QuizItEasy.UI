export class PaginationModel {
    
    constructor(pageSize: number, pageNumber: number = 1) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;    
    }

    pageSize: number = 10;
    pageNumber: number = 1;
} 