export interface ProductItem {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    itemsLeft: number;
    added?: boolean;
    quantity?: number;
}
