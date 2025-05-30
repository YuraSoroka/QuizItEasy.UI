export class PaginationModel {
    
    constructor(pageNumber: number|null, pageSize: number|null) {
        this.pageNumber = pageNumber ?? 1;
        this.pageSize = pageSize ?? 10;
    }

    pageSize: number;
    pageNumber: number;
} 