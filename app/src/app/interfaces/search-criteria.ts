export interface ProductSearchCriteria {
    name: string;
    minprice: number;
    maxprice: number;
    quantity?: number;
    sort?: string;
}